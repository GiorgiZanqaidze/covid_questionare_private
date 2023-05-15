<template>
  <base-wrapper>
    <div class="mt-12">
      <form-header :page="2"></form-header>
      <div class="flex justify-center">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          class="w-2/5 flex flex-col mt-12 gap-12 relative"
        >
          <div class="flex flex-col w-3/4 gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">გაქვს გადატანილი Covid-19?*</h1>
            <div class="inline-block ml-3">
              <Field
                id="covid_yes"
                name="condition"
                type="radio"
                value="covid_yes"
                class="inline"
                v-model="selectedOption"
                @change="changeCondition"
              />
              <label for="covid_yes" class="inline-block ml-6">კი</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                id="covid_no"
                name="condition"
                type="radio"
                value="covid_no"
                class="inline"
                v-model="selectedOption"
                @change="changeCondition"
              />
              <label for="covid_no" class="inline-block ml-6">არა</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                id="covid_now"
                name="condition"
                type="radio"
                value="covid_now"
                class="inline"
                v-model="selectedOption"
                @change="changeCondition"
              />
              <label for="covid_now" class="inline-block ml-6">ახლა მაქვს</label>
            </div>
            <ErrorMessage name="condition" class="text-red-500 absolute text-sm left-3 top-32" />
          </div>
          <div v-if="selectedOption === 'covid_yes'" class="flex flex-col w-3/4 gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">
              ანტისხეულების ტესტი გაქვს გაკეთებული?*
            </h1>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_yes"
                name="vaccine_condition"
                type="radio"
                value="true"
                class="inline"
                v-model="vaccineOption"
                @change="changeCondition"
              />
              <label for="vaccine_yes" class="inline-block ml-6">კი</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_no"
                name="vaccine_condition"
                type="radio"
                value="false"
                class="inline"
                v-model="vaccineOption"
                @change="changeCondition"
              />
              <label for="vaccine_no" class="inline-block ml-6">არა</label>
            </div>
            <ErrorMessage
              name="vaccine_condition"
              class="text-red-500 absolute text-sm left-3 top-32"
            />
          </div>
          <div v-if="vaccineOption">
            <div class="flex flex-col w-3/4 gap-2 relative">
              <h1 for="number" class="text-sm font-bold" v-if="vaccineOption === 'false'">
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19**
              </h1>
              <h1 for="number" class="text-sm font-bold" v-if="vaccineOption === 'true'">
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*
              </h1>
              <Field
                id="number"
                name="number"
                type="date"
                class="px-3 py-2 border border-darkGray text-sm inline-block ml-3"
                v-model="number"
              />
              <ErrorMessage name="number" class="text-red-500 absolute top-20 text-sm left-3" />
              <Field
                id="number"
                name="number"
                type="number"
                class="px-3 py-2 border border-darkGray text-sm inline-block ml-3"
                placeholder="რიცხვი"
                v-model="number"
                v-if="vaccineOption === 'true'"
              />
              <ErrorMessage
                name="number"
                class="text-red-500 absolute top-20 text-sm left-3"
                v-if="vaccineOption === 'true'"
              />
            </div>
          </div>
          <div class="w-full absolute bottom-10 flex gap-10 translate-x-1/4 justify-end">
            <router-link to="identify" class="translate-x-2/4">
              <img src="/Vector_left.png" alt="vector_left"
            /></router-link>
            <button class="translate-x-2/4">
              <img src="/Vector_right.png" alt="vector_right" />
            </button>
          </div>
        </Form>
        <div>
          <img src="/CovidConditionImage.png" alt="animation" />
        </div>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },

  computed: {
    schema() {
      return {
        condition: (value) => {
          if (value) {
            return true
          }
          return 'არსებული ველი სავალდებულოა'
        },
        vaccine_condition: (value) => {
          if (this.selectedOption === 'covid_yes' && !value) {
            return 'არსებული ველი სავალდებულოა'
          }
          return true
        }
      }
    },
    selectedOption() {
      return this.$store.getters['inputs_covid_condition/selectedOption']
    },
    vaccineOption() {
      return this.$store.getters['inputs_covid_condition/vaccineOption']
    },
    allInputs() {
      return {
        condition: this.selectedOption,
        vaccine_condition: this.vaccine_condition
      }
    }
  },

  created() {
    const data = JSON.parse(localStorage.getItem('CovidCondition'))
    if (data) {
      this.$store.dispatch('inputs_covid_condition/saveData', data)
    }
  },

  methods: {
    onSubmit(values) {
      this.$store.dispatch('inputs_covid_condition/saveData', values)
      this.$router.push('/vaccine-condition')
    },
    changeCondition(e) {
      this.$store.dispatch('inputs_covid_condition/saveData', {
        ...this.allInputs,
        [e.target.name]: e.target.value
      })
    }
  }
}
</script>

<template>
  <base-wrapper>
    <div class="mt-12">
      <form-header :page="2"></form-header>
      <div class="flex justify-between">
        <Form @submit="onSubmit" class="w-[650px] flex flex-col mt-12 gap-12 relative">
          <div class="flex flex-col w-3/4 gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">გაქვს გადატანილი Covid-19?*</h1>

            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="covid_yes"
                name="condition"
                type="radio"
                value="covid_yes"
                class="inline accent-darkGray scale-150"
                v-model="selectedOption"
                @change="changeCondition"
              />
              <label for="covid_yes" class="inline-block ml-6">კი</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="covid_no"
                name="condition"
                type="radio"
                value="covid_no"
                class="inline accent-darkGray scale-150"
                v-model="selectedOption"
                @change="changeCondition"
              />
              <label for="covid_no" class="inline-block ml-6">არა</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="covid_now"
                name="condition"
                type="radio"
                value="covid_now"
                class="inline accent-darkGray scale-150"
                v-model="selectedOption"
                @change="changeCondition"
              />
              <label for="covid_now" class="inline-block ml-6">ახლა მაქვს</label>
            </div>
            <ErrorMessage name="condition" class="text-red-500 absolute text-sm left-3 top-32" />
          </div>
          <div v-if="isCovidTrue" class="flex flex-col w-3/4 gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">
              ანტისხეულების ტესტი გაქვს გაკეთებული?*
            </h1>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_yes"
                name="vaccine_condition"
                type="radio"
                value="true"
                class="inline accent-darkGray scale-150"
                v-model="vaccineOption"
                @change="changeCondition"
                rules="required"
              />
              <label for="vaccine_yes" class="inline-block ml-6">კი</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_no"
                name="vaccine_condition"
                type="radio"
                value="false"
                class="inline accent-darkGray scale-150"
                v-model="vaccineOption"
                @change="changeCondition"
                rules="required"
              />
              <label for="vaccine_no" class="inline-block ml-6">არა</label>
            </div>
            <ErrorMessage
              name="vaccine_condition"
              class="text-red-500 absolute text-sm left-3 top-32"
            />
          </div>
          <div class="flex flex-col w-4/5 gap-2 relative box-border">
            <div v-if="vaccineOption === 'true'">
              <label for="test_date" class="font-bold w-full">
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19**
              </label>
              <Field
                id="test_date"
                name="test_date"
                type="text"
                placeholder="დდ/თთ/წწ"
                class="px-3 py-2 border border-darkGray text-sm inline-block ml-3 w-full mt-4"
                v-model="test_date"
                @input="changeCondition"
              />
              <Field
                id="number"
                name="number"
                type="number"
                placeholder="ანტისხეულების რაოდენობა"
                class="px-3 py-2 border border-darkGray text-sm inline-block ml-3 w-full mt-4"
                v-model="number"
                @input="changeCondition"
              />
            </div>
            <div v-if="vaccineOption === 'false'">
              <label for="test_date" class="font-bold w-full">
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*
              </label>
              <Field
                id="test_date"
                name="test_date"
                type="text"
                class="px-3 py-2 border border-darkGray text-sm inline-block ml-3 w-full mt-4"
                placeholder="დდ/თთ/წწ"
                v-model="test_date"
                rules="required"
                @input="changeCondition"
              />
              <ErrorMessage name="test_date" class="text-red-500 absolute text-sm left-3 top-32" />
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
        <ImageContainer src="/CovidConditionImage.png" class="w-[870px]" />
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import ImageContainer from '../components/ImageContainer.vue'
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    ImageContainer
  },

  computed: {
    selectedOption() {
      return this.$store.getters['inputs_covid_condition/selectedOption']
    },
    isCovidTrue() {
      return this.selectedOption === 'covid_yes'
    },
    vaccineOption() {
      return this.$store.getters['inputs_covid_condition/vaccineOption']
    },

    test_date() {
      return this.$store.getters['inputs_covid_condition/test_date']
    },

    number() {
      return this.$store.getters['inputs_covid_condition/number']
    },

    allInputs() {
      return {
        condition: this.selectedOption,
        vaccine_condition: this.vaccine_condition,
        test_date: this.test_date,
        number: this.number
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
        vaccine_condition: this.vaccineOption,
        [e.target.name]: e.target.value
      })
    }
  }
}
</script>

<template>
  <base-wrapper>
    <div class="my-12">
      <form-header :page="2"></form-header>
      <div class="flex justify-between relative">
        <Form @submit="onSubmit" class="w-[650px] flex flex-col mt-12 gap-12">
          <div class="flex flex-col w-3/4 gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">გაქვს გადატანილი Covid-19?*</h1>

            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="yes"
                name="had_covid"
                type="radio"
                value="yes"
                class="inline accent-darkGray scale-150"
                v-model="had_covid"
                @change="changeCondition"
              />
              <label for="yes" class="inline-block ml-6">კი</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="no"
                name="had_covid"
                type="radio"
                value="no"
                class="inline accent-darkGray scale-150"
                v-model="had_covid"
                @change="changeCondition"
              />
              <label for="no" class="inline-block ml-6">არა</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="have_right_now"
                name="had_covid"
                type="radio"
                value="have_right_now"
                class="inline accent-darkGray scale-150"
                v-model="had_covid"
                @change="changeCondition"
              />
              <label for="have_right_now" class="inline-block ml-6">ახლა მაქვს</label>
            </div>
            <ErrorMessage name="had_covid" class="text-red-500 absolute text-sm left-3 top-32" />
          </div>
          <div v-if="isCovidTrue" class="flex flex-col w-3/4 gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">
              ანტისხეულების ტესტი გაქვს გაკეთებული?*
            </h1>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_yes"
                name="had_antibody_test"
                type="radio"
                value="true"
                class="inline accent-darkGray scale-150"
                v-model="had_antibody_test"
                @change="changeCondition"
                rules="required"
              />
              <label for="vaccine_yes" class="inline-block ml-6">კი</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_no"
                name="had_antibody_test"
                type="radio"
                value="false"
                class="inline accent-darkGray scale-150"
                v-model="had_antibody_test"
                @change="changeCondition"
                rules="required"
              />
              <label for="vaccine_no" class="inline-block ml-6">არა</label>
            </div>
            <ErrorMessage
              name="had_antibody_test"
              class="text-red-500 absolute text-sm left-3 top-32"
            />
          </div>
          <div class="flex flex-col w-4/5 gap-2 relative box-border" v-if="isCovidTrue">
            <div v-if="had_antibody_test === 'true'">
              <label for="test_date" class="font-bold w-full">
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*
              </label>
              <Field
                :rules="isRequiredDate"
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
            <ErrorMessage name="test_date" class="text-red-500 absolute text-sm left-3 top-40" />
            <div v-if="had_antibody_test === 'false'">
              <label for="covid_sickness_date" class="font-bold w-full">
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19**
              </label>
              <Field
                id="covid_sickness_date"
                name="covid_sickness_date"
                type="text"
                class="px-3 py-2 border border-darkGray text-sm inline-block ml-3 w-full mt-4"
                placeholder="დდ/თთ/წწ"
                v-model="covid_sickness_date"
                @input="changeCondition"
                rules="required|required_date"
              />
              <ErrorMessage
                name="covid_sickness_date"
                class="text-red-500 absolute text-sm left-3 top-32"
              />
            </div>
          </div>
          <div class="absolute bottom-0 left-1/2 flex gap-32" style="transform: translateX(-50%)">
            <router-arrow-link link="identify"></router-arrow-link>
            <submit-button></submit-button>
          </div>
        </Form>
        <div>
          <div class="w-[870px]">
            <img src="@/assets/images/vaccinate2.svg" alt="animation" />
          </div>
          <Animation />
        </div>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import Animation from '../components/CovidConditionAnimation.vue'

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Animation
  },

  computed: {
    had_covid() {
      return this.$store.getters['inputs_covid_condition/had_covid']
    },
    isCovidTrue() {
      return this.had_covid === 'yes'
    },
    had_antibody_test() {
      return this.$store.getters['inputs_covid_condition/had_antibody_test']
    },

    test_date() {
      return this.$store.getters['inputs_covid_condition/test_date']
    },
    covid_sickness_date() {
      return this.$store.getters['inputs_covid_condition/covid_sickness_date']
    },

    number() {
      return this.$store.getters['inputs_covid_condition/number']
    },
    isRequiredDate() {
      if (this.test_date !== '') {
        return 'required_date'
      } else {
        return
      }
    },

    allInputs() {
      return {
        had_covid: this.had_covid,
        had_antibody_test: this.had_antibody_test,
        test_date: this.test_date,
        number: this.number,
        covid_sickness_date: this.covid_sickness_date
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
        had_antibody_test: this.had_antibody_test,
        [e.target.name]: e.target.value
      })
    }
  }
}
</script>

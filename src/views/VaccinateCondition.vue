<template>
  <base-wrapper>
    <div class="mt-12">
      <form-header :page="3"></form-header>
      <div class="flex justify-between w-full">
        <Form @submit="onSubmit" class="w-[650px] flex flex-col mt-12 gap-12 relative">
          <div class="flex flex-col w-3/4 gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">უკვე აცრილი ხარ?*</h1>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_yes"
                name="had_vaccine"
                type="radio"
                value="true"
                class="inline accent-darkGray"
                v-model="had_vaccine"
                @change="changeCondition"
                rules="required"
              />
              <label for="vaccine_yes" class="inline-block ml-6">კი</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_no"
                name="had_vaccine"
                type="radio"
                value="false"
                class="inline accent-darkGray"
                v-model="had_vaccine"
                @change="changeCondition"
                rules="required"
              />
              <label for="vaccine_no" class="inline-block ml-6">არა</label>
            </div>
            <ErrorMessage name="had_vaccine" class="text-red-500 absolute text-sm left-3 top-32" />
          </div>
          <div class="flex flex-col w-full gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">აირჩიე რა ეტაპზე ხარ*</h1>
            <div class="inline-block ml-3">
              <Field
                id="first_dose"
                name="vaccination_stage"
                type="radio"
                value="first_dosage_and_registered_on_the_second"
                class="inline accent-darkGray"
                v-model="vaccination_stage"
                @change="changeCondition"
                rules="required"
              />
              <label for="first_dose" class="inline-block ml-6"
                >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
              >
            </div>
            <div class="inline-block ml-3">
              <Field
                id="full_dose"
                name="vaccination_stage"
                type="radio"
                value="fully_vaccinated"
                class="inline accent-darkGray"
                v-model="vaccination_stage"
                @change="changeCondition"
                rules="required"
              />
              <label for="full_dose" class="inline-block ml-6">სრულად აცრილი ვარ</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                id="not_registered"
                name="vaccination_stage"
                type="radio"
                value="first_dosage_and_not_registered_on_the_second"
                class="inline accent-darkGray"
                v-model="vaccination_stage"
                @change="changeCondition"
                rules="required"
              />
              <label for="not_registered" class="inline-block ml-6"
                >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
              >
            </div>
            <ErrorMessage
              name="vaccination_stage"
              class="text-red-500 absolute text-sm left-3 top-32"
            />
          </div>
          <div class="w-full absolute bottom-10 flex gap-10 translate-x-1/4 justify-end">
            <router-link to="covid-condition" class="translate-x-2/4">
              <img src="/Vector_left.png" alt="vector_left"
            /></router-link>
            <button class="translate-x-2/4">
              <img src="/Vector_right.png" alt="vector_right" />
            </button></div
        ></Form>
        <ImageContainer src="/VaccineConditionImage.png" clas="w-[783px]" />
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
    had_vaccine() {
      return this.$store.getters['inputs_vaccine_condition/had_vaccine']
    },
    vaccination_stage() {
      return this.$store.getters['inputs_vaccine_condition/vaccination_stage']
    },
    allInputs() {
      return {
        had_vaccine: this.had_vaccine,
        vaccination_stage: this.vaccination_stage
      }
    }
  },

  methods: {
    onSubmit(values) {
      this.$store.dispatch('inputs_vaccine_condition/saveData', values)
    },
    changeCondition(e) {
      this.$store.dispatch('inputs_vaccine_condition/saveData', {
        ...this.allInputs,
        [e.target.name]: e.target.value
      })
    }
  },

  created() {
    const data = JSON.parse(localStorage.getItem('VaccineCondition'))
    if (data) {
      this.$store.dispatch('inputs_vaccine_condition/saveData', data)
    }
  }
}
</script>

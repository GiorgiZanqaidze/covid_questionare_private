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
                class="inline accent-darkGray scale-150"
                v-model="had_vaccine"
                @change="changeInput"
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
                class="inline accent-darkGray scale-150"
                v-model="had_vaccine"
                @change="changeInput"
                rules="required"
              />
              <label for="vaccine_no" class="inline-block ml-6">არა</label>
            </div>
            <ErrorMessage name="had_vaccine" class="text-red-500 absolute text-sm left-3 top-32" />
          </div>
          <div v-if="had_vaccine_true" class="flex flex-col w-full gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">აირჩიე რა ეტაპზე ხარ*</h1>
            <div class="inline-block ml-3">
              <Field
                id="first_dose"
                name="vaccination_stage"
                type="radio"
                value="first_dosage_and_registered_on_the_second"
                class="inline accent-darkGray scale-150"
                v-model="vaccination_stage"
                @change="changeInput"
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
                class="inline accent-darkGray scale-150"
                v-model="vaccination_stage"
                @change="changeInput"
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
                class="inline accent-darkGray scale-150"
                v-model="vaccination_stage"
                @change="changeInput"
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
          <div v-else class="flex flex-col w-full gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">რას ელოდები?*</h1>
            <div class="inline-block ml-3">
              <Field
                id="registered_and_waiting"
                name="vaccination_stage"
                type="radio"
                value="registered_and_waiting"
                class="inline accent-darkGray scale-150"
                v-model="vaccination_stage"
                @change="changeInput"
                rules="required"
              />
              <label for="registered_and_waiting" class="inline-block ml-6"
                >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
              >
            </div>
            <div class="inline-block ml-3">
              <Field
                id="not_interested"
                name="vaccination_stage"
                type="radio"
                value="not_interested"
                class="inline accent-darkGray scale-150"
                v-model="vaccination_stage"
                @change="changeInput"
                rules="required"
              />
              <label for="not_interested" class="inline-block ml-6">არ ვგეგმავ</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                id="get_over_and_have_plan_to_register"
                name="vaccination_stage"
                type="radio"
                value="get_over_and_have_plan_to_register"
                class="inline accent-darkGray scale-150"
                v-model="vaccination_stage"
                @change="changeInput"
                rules="required"
              />
              <label for="get_over_and_have_plan_to_register" class="inline-block ml-6"
                >გადატანილი მაქვს და ვგეგმავ აცრას</label
              >
            </div>
            <ErrorMessage
              name="vaccination_stage"
              class="text-red-500 absolute text-sm left-3 top-32"
            />
          </div>
          <div
            v-if="
              vaccination_stage === 'first_dosage_and_not_registered_on_the_second' &&
              had_vaccine_true
            "
          >
            <p class="ml-3 w-3/4">
              რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი <br />
              <a href="https://booking.moh.gov.ge/" class="text-darkBlue"
                >https://booking.moh.gov.ge/</a
              >
            </p>
          </div>
          <div v-if="vaccination_stage === 'not_interested' && !had_vaccine_true">
            <p class="ml-3 w-3/4">
              <a href="https://booking.moh.gov.ge/" class="text-darkBlue inline-block mt-3"
                >👉 https://booking.moh.gov.ge/</a
              >
            </p>
          </div>
          <div
            v-if="vaccination_stage === 'get_over_and_have_plan_to_register' && !had_vaccine_true"
          >
            <p class="ml-3 w-3/4">
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.<br />
              <span class="mt-4 inline-block"
                >👉 რეგისტრაციის ბმული
                <a href="https://booking.moh.gov.ge/" class="text-darkBlue"
                  >https://booking.moh.gov.ge/</a
                ></span
              >
            </p>
          </div>

          <div class="w-full absolute bottom-10 flex gap-10 translate-x-1/4 justify-end">
            <router-link to="covid-condition" class="translate-x-2/4">
              <img src="/Vector_left.png" alt="vector_left"
            /></router-link>
            <button class="translate-x-2/4">
              <img src="/Vector_right.png" alt="vector_right" />
            </button></div
        ></Form>
        <ImageContainer src="/VaccineConditionImage.png" class="w-[783px]" />
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
    had_vaccine_true() {
      return this.had_vaccine === 'true'
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
      this.$router.push('/suggestions')
    },
    changeInput(e) {
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

<template>
  <base-wrapper>
    <div class="my-12">
      <form-header :page="4"></form-header>
      <div class="flex justify-between mb-14 relative">
        <Form @submit="onSubmit" class="w-[650px] flex flex-col mt-12 gap-12">
          <div class="flex flex-col w-[606px] gap-2 relative">
            <div class="mb-4">
              <p>
                <span
                  >რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
                  თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის
                  ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.</span
                >

                <br /><span class="inline-block mt-2"
                  >პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური
                  კომუნიკაციაც გაიშვიათდა.</span
                >
              </p>
            </div>
            <h1 class="text-base font-bold tracking-wide">
              რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა
              სურვილისამებრ ჩაერთვება?*
            </h1>

            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="twice_a_week"
                name="non_formal_meetings"
                type="radio"
                value="twice_a_week"
                class="inline accent-darkGray scale-150"
                v-model="non_formal_meetings"
                @change="changeInputs"
              />
              <label for="twice_a_week" class="inline-block ml-6">კვირაში ორჯერ</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="once_a_week"
                name="non_formal_meetings"
                type="radio"
                value="once_a_week"
                class="inline accent-darkGray scale-150"
                v-model="non_formal_meetings"
                @change="changeInputs"
              />
              <label for="once_a_week" class="inline-block ml-6">კვირაში ერთხელ</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="once_in_a_two_weeks"
                name="non_formal_meetings"
                type="radio"
                value="once_in_a_two_weeks"
                class="inline accent-darkGray scale-150"
                v-model="non_formal_meetings"
                @change="changeInputs"
              />
              <label for="once_in_a_two_weeks" class="inline-block ml-6">ორ კვირაში ერთხელ</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="once_in_a_month"
                name="non_formal_meetings"
                type="radio"
                value="once_in_a_month"
                class="inline accent-darkGray scale-150"
                v-model="non_formal_meetings"
                @change="changeInputs"
              />
              <label for="once_in_a_month" class="inline-block ml-6">თვეში ერთხელ</label>
            </div>
            <ErrorMessage
              name="non_formal_meetings"
              class="text-red-500 absolute text-sm left-3 top-32"
            />
          </div>
          <div class="flex flex-col w- gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">
              კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
            </h1>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="0"
                name="number_of_days_from_office"
                type="radio"
                value="0"
                class="inline accent-darkGray scale-150"
                v-model="number_of_days_from_office"
                @change="changeInputs"
              />
              <label for="0" class="inline-block ml-6">0</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="1"
                name="number_of_days_from_office"
                type="radio"
                value="1"
                class="inline accent-darkGray scale-150"
                v-model="number_of_days_from_office"
                @change="changeInputs"
              />
              <label for="1" class="inline-block ml-6">1</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="2"
                name="number_of_days_from_office"
                type="radio"
                value="2"
                class="inline accent-darkGray scale-150"
                v-model="number_of_days_from_office"
                @change="changeInputs"
              />
              <label for="2" class="inline-block ml-6">2</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="3"
                name="number_of_days_from_office"
                type="radio"
                value="3"
                class="inline accent-darkGray scale-150"
                v-model="number_of_days_from_office"
                @change="changeInputs"
              />
              <label for="3" class="inline-block ml-6">3</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="4"
                name="number_of_days_from_office"
                type="radio"
                value="4"
                class="inline accent-darkGray scale-150"
                v-model="number_of_days_from_office"
                @change="changeInputs"
              />
              <label for="4" class="inline-block ml-6">4</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                rules="required"
                id="5"
                name="number_of_days_from_office"
                type="radio"
                value="5"
                class="inline accent-darkGray scale-150"
                v-model="number_of_days_from_office"
                @change="changeInputs"
              />
              <label for="5" class="inline-block ml-6">5</label>
            </div>
            <ErrorMessage
              name="number_of_days_from_office"
              class="text-red-500 absolute text-sm left-3 top-32"
            />
          </div>
          <div class="flex flex-col">
            <label for="about_meeting" class="block text-base font-bold tracking-wide mb-2"
              >რას ფიქრობ ფიზიკურ შეკრებებზე?</label
            >
            <textarea
              rules="required"
              id="about_meeting"
              name="what_about_meetings_in_live"
              type="text"
              class="w-full px-3 py-2 border border-darkGray text-sm min-h-[180px]"
              v-model="what_about_meetings_in_live"
              @change="changeInputs"
            ></textarea>
          </div>
          <div class="flex flex-col">
            <label for="about_us" class="block text-base font-bold tracking-wide mb-2"
              >რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</label
            >
            <textarea
              rules="required"
              id="about_us"
              name="tell_us_your_opinion_about_us"
              type="text"
              class="w-full px-3 py-2 border border-darkGray text-sm min-h-[180px]"
              v-model="tell_us_your_opinion_about_us"
              @change="changeInputs"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button class="bg-darkBlue px-5 py-3 rounded-[42px] text-white text-sm font-semibold">
              დასრულება
            </button>
          </div>

          <div class="absolute left-1/2" style="bottom: -80px">
            <router-link to="/vaccine-condition">
              <img src="/Vector_left.png" alt="vector_left"
            /></router-link>
          </div>
        </Form>
        <div class="mt-20">
          <ImageContainer src="/bike.png" class="w-[703px] fixed top-200 left-[1100px]" />
          <Animation />
        </div>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import ImageContainer from '../components/ImageContainer.vue'
import Animation from '../components/animations/suggestions.vue'
import axios from 'axios'
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    ImageContainer,
    Animation
  },

  computed: {
    non_formal_meetings() {
      return this.$store.getters['inputs_suggestions/non_formal_meetings']
    },
    number_of_days_from_office() {
      return this.$store.getters['inputs_suggestions/number_of_days_from_office']
    },
    what_about_meetings_in_live() {
      return this.$store.getters['inputs_suggestions/what_about_meetings_in_live']
    },
    tell_us_your_opinion_about_us() {
      return this.$store.getters['inputs_suggestions/tell_us_your_opinion_about_us']
    },

    allInputs() {
      return {
        non_formal_meetings: this.non_formal_meetings,
        number_of_days_from_office: this.number_of_days_from_office,
        what_about_meetings_in_live: this.what_about_meetings_in_live,
        tell_us_your_opinion_about_us: this.tell_us_your_opinion_about_us
      }
    }
  },

  methods: {
    changeInputs(e) {
      this.$store.dispatch('inputs_suggestions/saveData', {
        ...this.allInputs,
        [e.target.name]: e.target.value
      })
    },
    async onSubmit() {
      const suggestions = JSON.parse(localStorage.getItem('Suggestions'))
      const privateInfo = JSON.parse(localStorage.getItem('IdentifyData'))
      const vaccineCondition = JSON.parse(localStorage.getItem('VaccineCondition'))
      const covidCondition = JSON.parse(localStorage.getItem('CovidCondition'))

      const allInputs = {
        ...privateInfo,
        antibodies: {
          test_date: vaccineCondition.test_date,
          number: vaccineCondition.number
        },
        had_vaccine: JSON.parse(vaccineCondition.had_vaccine),
        vaccination_stage: 'first_dosage_and_registered_on_the_second',
        ...covidCondition,
        ...suggestions
      }

      axios
        .post(
          'https://covid19.devtest.ge/api/create',
          {
            ...allInputs
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((response) => {
          if (response.status === 201) {
            this.$router.push('/thank-you')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },

  created() {
    const data = JSON.parse(localStorage.getItem('Suggestions'))
    if (data) {
      this.$store.dispatch('inputs_suggestions/saveData', data)
    }
  }
}
</script>

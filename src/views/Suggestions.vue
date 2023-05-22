<template>
  <base-wrapper>
    <div class="my-12">
      <form-header :page="4"></form-header>
      <div class="flex justify-between mb-14 relative">
        <Form @submit="postInputsData" class="w-[650px] flex flex-col mt-12 gap-12">
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
            <RadioButton
              rules="required"
              label="კვირაში ერთხელ"
              name="non_formal_meetings"
              v-model="non_formal_meetings"
              value="once_a_week"
              id="once_a_week"
              @save-data="changeInputs"
            />
            <RadioButton
              rules="required"
              label="ორ კვირაში ერთხელ"
              name="non_formal_meetings"
              v-model="non_formal_meetings"
              value="once_in_a_two_weeks"
              id="once_in_a_two_weeks"
              @save-data="changeInputs"
            />
            <RadioButton
              rules="required"
              label="თვეში ერთხელ"
              name="non_formal_meetings"
              v-model="non_formal_meetings"
              value="once_in_a_month"
              id="once_in_a_month"
              @save-data="changeInputs"
            />
            <ErrorMessage
              name="non_formal_meetings"
              class="text-red-500 absolute text-sm left-3 bottom-[-30px]"
            />
          </div>
          <div class="flex flex-col w- gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">
              კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
            </h1>
            <div class="ml-3">
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
            <RadioButton
              rules="required"
              label="1"
              name="number_of_days_from_office"
              v-model="number_of_days_from_office"
              value="1"
              id="1"
              @save-data="changeInputs"
            />
            <RadioButton
              rules="required"
              label="2"
              name="number_of_days_from_office"
              v-model="number_of_days_from_office"
              value="2"
              id="2"
              @save-data="changeInputs"
            />
            <RadioButton
              rules="required"
              label="3"
              name="number_of_days_from_office"
              v-model="number_of_days_from_office"
              value="3"
              id="3"
              @save-data="changeInputs"
            />
            <RadioButton
              rules="required"
              label="4"
              name="number_of_days_from_office"
              v-model="number_of_days_from_office"
              value="4"
              id="4"
              @save-data="changeInputs"
            />
            <RadioButton
              rules="required"
              label="5"
              name="number_of_days_from_office"
              v-model="number_of_days_from_office"
              value="5"
              id="5"
              @save-data="changeInputs"
            />
            <ErrorMessage
              name="number_of_days_from_office"
              class="text-red-500 absolute text-sm left-3 top-56"
            />
          </div>
          <TextArea
            label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
            id="about_meeting"
            name="what_about_meetings_in_live"
            @save-data="changeInputs"
            v-model="what_about_meetings_in_live"
            :value="what_about_meetings_in_live"
          />
          <TextArea
            label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
            id="about_us"
            name="tell_us_your_opinion_about_us"
            @save-data="changeInputs"
            v-model="tell_us_your_opinion_about_us"
            :value="tell_us_your_opinion_about_us"
          />
          <div class="flex justify-end">
            <button class="bg-darkBlue px-5 py-3 rounded-[42px] text-white text-sm font-semibold">
              დასრულება
            </button>
          </div>

          <div class="absolute left-1/2" style="bottom: -80px">
            <router-arrow-link link="/vaccine-condition"></router-arrow-link>
          </div>
        </Form>
        <div class="mt-20">
          <div class="w-[703px] fixed top-200 left-[1100px]">
            <img src="@/assets/images/bike2.svg" alt="animation" />
          </div>
          <Animation />
        </div>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import Animation from '../components/TheSuggestions.vue'
import TextArea from '../components/TheTextarea.vue'
import RadioButton from '../components/TheRadioInput.vue'
import axios from 'axios'
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Animation,
    TextArea,
    RadioButton
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
    postInputsData() {
      this.$store.dispatch('inputs_suggestions/postData')
      this.$router.push('/thank-you')
      localStorage.clear()
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

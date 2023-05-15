<template>
  <base-wrapper>
    <div class="mt-12">
      <form-header :page="1"></form-header>
      <div class="flex">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          class="w-2/5 flex flex-col mt-12 gap-12 relative"
        >
          <div class="flex flex-col w-3/4 gap-2 relative">
            <label for="name" class="text-base font-bold tracking-wide">სახელი*</label>
            <Field
              id="name"
              name="name"
              type="text"
              class="px-3 py-2 border border-darkGray text-sm"
              placeholder="იოსებ"
              v-model="name"
            />
            <ErrorMessage name="name" class="text-red-500 absolute top-20 text-sm left-3" />
          </div>
          <div class="flex flex-col w-3/4 gap-2 relative">
            <label for="surname" class="text-base font-bold tracking-wide">გვარი*</label>
            <Field
              id="surname"
              name="surname"
              type="text"
              class="px-3 py-2 border border-darkGray text-sm"
              placeholder="ჯუღაშვილი"
              v-model="surname"
            />
            <ErrorMessage name="surname" class="text-red-500 absolute top-20 text-sm left-3" />
          </div>
          <div class="flex flex-col w-3/4 gap-2 relative">
            <label for="email" class="text-base font-bold tracking-wide">მეილი*</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="px-3 py-2 border border-darkGray text-sm"
              placeholder="fbi@redberry.ge"
              v-model="email"
            />
            <ErrorMessage name="email" class="text-red-500 absolute top-20 text-sm left-3" />
          </div>
          <required-inputs></required-inputs>
          <div class="w-full absolute bottom-10 flex gap-10 translate-x-1/4 justify-end">
            <button class="">
              <img src="/Vector_right.png" alt="vector_right" />
            </button>
          </div>
        </Form>
        <div>
          <img src="/identifyImage.png" alt="animation" />
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
        name: (value) => {
          if (value) {
            return true
          }

          return 'სახელის ველი სავალდებულოა'
        },
        surname: (value) => {
          if (value) {
            return true
          }
          return 'გვარის ველი სავალდებულოა'
        },
        email: (value) => {
          if (value) {
            return true
          }
          return 'მეილის ველი არის სავალდებულო'
        }
      }
    },
    name() {
      return this.$store.getters['inputs_identify/name']
    },
    surname() {
      return this.$store.getters['inputs_identify/surname']
    },
    email() {
      return this.$store.getters['inputs_identify/email']
    }
  },

  methods: {
    onSubmit(values) {
      this.$store.dispatch('inputs_identify/saveData', values)
      this.$router.push('/covid-condition')
    }
  },

  created() {
    const myData = JSON.parse(localStorage.getItem('IdentifyData'))
    if (myData) {
      this.$store.dispatch('inputs_identify/saveData', myData)
    }
  }
}
</script>

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
          <input-field
            label="სახელი"
            name="first_name"
            id="first_name"
            type="text"
            placeholder="იოსებ"
            v-model="first_name"
            @save-data="changeInput"
          ></input-field>

          <input-field
            label="გვარი"
            name="last_name"
            id="last_name"
            type="text"
            placeholder="ჯუღაშვილი"
            v-model="last_name"
            @save-data="changeInput"
          ></input-field>

          <input-field
            label="მეილი"
            name="email"
            id="email"
            type="text"
            placeholder="fbi@redberry.ge"
            v-model="email"
            @save-data="changeInput"
          ></input-field>

          <required-inputs></required-inputs>
          <div class="w-full absolute bottom-10 flex gap-10 translate-x-1/4 justify-end">
            <button class="">
              <img src="/Vector_right.png" alt="vector_right" />
            </button>
          </div>
        </Form>
        <ImageContainer src="/identifyImage.png" />
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import InputField from '../components/forms/inputs/InputField.vue'
import ImageContainer from '../components/ImageContainer.vue'

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    InputField,
    ImageContainer
  },

  computed: {
    schema() {
      return {
        first_name: (value) => {
          if (value) {
            return true
          }

          return 'სახელის ველი სავალდებულოა'
        },
        last_name: (value) => {
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
    first_name() {
      return this.$store.getters['inputs_identify/first_name']
    },
    last_name() {
      return this.$store.getters['inputs_identify/last_name']
    },
    email() {
      return this.$store.getters['inputs_identify/email']
    }
  },

  methods: {
    onSubmit(values) {
      this.$store.dispatch('inputs_identify/saveData', values)
      this.$router.push('/covid-condition')
    },

    changeInput(data) {
      const prevData = this.$store.getters['inputs_identify/getLocalData']
      this.$store.dispatch('inputs_identify/saveData', {
        ...prevData,
        [data.name]: data.value
      })
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

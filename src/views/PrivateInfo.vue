<template>
  <base-wrapper>
    <div class="my-12">
      <form-header :page="1"></form-header>
      <div class="flex relative">
        <Form @submit="onSubmit" class="w-2/5 flex flex-col mt-12 gap-12">
          <input-field
            label="სახელი"
            name="first_name"
            id="first_name"
            type="text"
            placeholder="იოსებ"
            v-model="first_name"
            @save-data="changeInput"
            rules="required|min_length_name:3|alpha_name|max_length_name:256"
          ></input-field>

          <input-field
            label="გვარი"
            name="last_name"
            id="last_name"
            type="text"
            placeholder="ჯუღაშვილი"
            v-model="last_name"
            @save-data="changeInput"
            rules="required|min_length_surname:3|alpha_surname|max_length_surname:256"
          ></input-field>

          <input-field
            label="მეილი"
            name="email"
            id="email"
            type="text"
            placeholder="fbi@redberry.ge"
            v-model="email"
            @save-data="changeInput"
            rules="required|email|redberry_email"
          ></input-field>

          <required-inputs></required-inputs>
          <div class="absolute bottom-0 left-1/2 flex" style="transform: translateX(-50%)">
            <submit-button></submit-button>
          </div>
        </Form>
        <div>
          <div>
            <img src="@/assets/images/identifyImage.svg" alt="animation" />
          </div>
          <Animation />
        </div>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import { Form } from 'vee-validate'
import InputField from '../components/InputField.vue'
import ImageContainer from '../components/ImageContainer.vue'
import Animation from '../components/privateInfo.vue'

export default {
  components: {
    Form,
    InputField,
    ImageContainer,
    Animation
  },

  computed: {
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

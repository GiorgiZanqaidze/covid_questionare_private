<template>
  <div class="inline-block ml-3">
    <Field
      :name="name"
      :id="name"
      type="radio"
      :value="name"
      class="inline"
      v-bind="$attrs"
      v-model="selectedOption"
      @change="changeCondition"
    />
    <label :for="id" class="inline-block ml-6">{{ label }}</label>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
export default {
  emit: ['change-radio'],
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    changeCondition(event) {
      this.$emit('change-radio', event.target)
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>

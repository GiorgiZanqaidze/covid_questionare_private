<template>
  <div class="inline-block ml-3">
    <Field
      :id="id"
      :name="name"
      type="radio"
      :value="value"
      class="inline accent-darkGray scale-150"
      @change="saveInput"
    />
    <label :for="id" class="inline-block ml-6">{{ label }}</label>
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
export default {
  emit: ['save-input'],
  components: {
    Field,
    ErrorMessage
  },

  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },

  methods: {
    saveInput(event) {
      this.$emit('save-data', event)
    }
  }
}
</script>

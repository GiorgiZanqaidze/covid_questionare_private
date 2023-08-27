<template>
  <div class="flex flex-col md:w-3/4 gap-2 relative">
    <label v-if="label" :for="name" class="text-base font-bold tracking-wide">{{ label }}*</label>
    <Field
      :name="name"
      :id="id"
      class="px-3 py-2 border border-darkGray text-sm"
      :value="value"
      @change="saveInput"
      :rules="rules"
      :placeholder="placeholder"
    />
    <ErrorMessage :name="name" class="text-red-500 absolute top-20 text-sm left-3" />
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
export default {
  emit: ['save-input'],
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    saveInput(event) {
      this.$emit('save-data', event.target)
    }
  },
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    rules: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
}
</script>

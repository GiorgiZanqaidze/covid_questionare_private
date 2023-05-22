<template>
  <div class="flex flex-col">
    <label :for="name" class="block text-base font-bold tracking-wide mb-2">{{ label }}</label>
    <textarea
      :id="id"
      :name="name"
      class="w-full px-3 py-2 border border-darkGray text-sm min-h-[180px]"
      @change="saveInput"
      :value="value"
    ></textarea>
  </div>
</template>

<script>
export default {
  emit: ['save-input'],
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
    }
  },

  methods: {
    saveInput(event) {
      this.$emit('save-data', event)
    }
  }
}
</script>

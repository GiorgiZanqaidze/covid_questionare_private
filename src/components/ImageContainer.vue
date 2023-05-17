<template>
  <div>
    <img :src="src" alt="animation" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

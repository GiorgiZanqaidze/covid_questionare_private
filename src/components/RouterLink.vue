<template>
  <router-link :to="link">
    <img src="/src/assets/icons/left_arrow.svg" alt="vector_left"
  /></router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>

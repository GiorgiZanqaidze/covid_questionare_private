<template>
  <router-link :to="link"> <img src="/Vector_left.png" alt="vector_left" /></router-link>
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

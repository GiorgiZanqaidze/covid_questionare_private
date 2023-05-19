<script setup>
import BaseWrapper from '../components/BaseWrapper.vue'
</script>

<template>
  <base-wrapper class="overflow-hidden">
    <Animation />
  </base-wrapper>
</template>

<script>
import Animation from '../components/animations/startQuery.vue'
export default {
  components: {
    Animation
  }
}
</script>

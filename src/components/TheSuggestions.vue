<template>
  <transition name="box_4">
    <img
      src="/src/assets/images/heart_logo.svg"
      v-if="showBox"
      class="fixed left-[1100px] top-[270px] h-[172px] w-[194px] opacity-70"
  /></transition>
</template>

<script>
export default {
  data() {
    return {
      showBox: false
    }
  },
  mounted() {
    this.showBox = true
  }
}
</script>

<style scoped>
.box_4-enter-active {
  transition: all 0.5s ease;
}

.box_4-enter-from {
  width: 60px;
  height: 60px;
  top: 30px;
  left: 1000px;
  opacity: 0;
}

.box_4-enter-to {
  top: 270px;
  width: 194px;
  height: 172px;
  opacity: 0.7;
  left: 1100;
}
</style>

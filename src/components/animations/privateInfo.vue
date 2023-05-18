<template>
  <transition name="box">
    <div
      v-if="showBox"
      class="bg-darkYellow absolute top-[230px] left-[750px] h-[75px] w-[622px] opacity-70"
    ></div>
  </transition>
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

<style>
.box-enter-active {
  transition: all 0.5s ease;
}

.box-enter-from {
  width: 200px;
  top: 300px;
  height: 60px;
  left: 700px;
  opacity: 0;
}

.box-enter-to {
  top: 230px;
  width: 622px;
  height: 75px;
  opacity: 0.7;
  left: 750px;
}
</style>

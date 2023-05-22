<template>
  <transition name="box" v-if="prevPage === '/'">
    <div
      v-if="showBox"
      class="bg-darkYellow absolute top-[230px] left-[750px] h-[75px] w-[622px] opacity-70"
    ></div>
  </transition>
  <transition name="box_2" v-if="prevPage === '/covid-condition'">
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
      showBox: false,
      prevPage: this.$router.options.history.state.back
    }
  },
  mounted() {
    ;(this.showBox = true), console.log(this.prevPage)
  }
}
</script>

<style scoped>
.box-enter-active,
.box_2-enter-active {
  transition: all 0.5s ease;
}

.box-enter-from {
  width: 200px;
  top: 240px;
  height: 60px;
  left: 500px;
  opacity: 0;
}

.box_2-enter-from {
  width: 200px;
  top: 300px;
  height: 60px;
  left: 600px;
  opacity: 0;
}

.box-enter-to,
.box_2-enter-to {
  top: 230px;
  width: 622px;
  height: 75px;
  opacity: 0.7;
  left: 750px;
}
</style>

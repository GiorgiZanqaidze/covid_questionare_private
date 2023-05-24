<template>
  <transition name="box_3" v-if="prevPage === '/covid-condition'">
    <img
      src="/src/assets/images/star_logo.svg"
      v-if="showBox"
      class="absolute bottom-[520px] left-[800px] h-[229px] w-[229px] opacity-70"
    />
  </transition>
  <transition name="box_4" v-if="prevPage === '/suggestions'">
    <img
      src="/src/assets/images/star_logo.svg"
      v-if="showBox"
      class="absolute bottom-[520px] left-[800px] h-[229px] w-[229px] opacity-70"
    />
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
    this.showBox = true
  }
}
</script>

<style scoped>
.box_3-enter-active,
.box_4-enter-active {
  transition: all 0.5s ease;
}

.box_3-enter-from {
  width: 60px;
  bottom: 350px;
  height: 60px;
  left: 650px;
  opacity: 0;
}

.box_4-enter-from {
  width: 60px;
  bottom: 300px;
  height: 60px;
  left: 1000px;
  opacity: 0;
}

.box_3-enter-to,
.box_4-enter-to {
  bottom: 520px;
  width: 229px;
  height: 229px;
  opacity: 0.7;
  left: 800px;
}
</style>

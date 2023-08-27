<template>
  <transition name="box" v-if="prevPage === '/'">
    <div
      v-if="showBox"
      class="bg-darkYellow absolute sm:top-[150px] lg:top-[200px] left-[100px] h-[75px] md:w-[450px] lg:w-[622px] opacity-70"
    ></div>
  </transition>
  <transition name="box_2" v-else>
    <div
      v-if="showBox"
      class="bg-darkYellow absolute sm:top-[150px] lg:top-[200px] left-[100px] h-[75px] md:w-[450px] lg:w-[622px] opacity-70"
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
    this.showBox = true
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

.box-enter-to {
  top: 230px;
  width: 622px;
  height: 75px;
  opacity: 0.7;
  left: 100px;
}

.box_2-enter-to {
  top: 230px;
  width: 622px;
  height: 75px;
  opacity: 0.7;
  left: 100px;
}

@media (min-width: 1200px) {
  .box-enter-to {
    top: 150px;
    width: 450px;
  }
  .box_2-enter-to {
    top: 150px;
    width: 450px;
  }
}
@media (min-width: 1600px) {
  .box-enter-to {
    top: 200px;
    width: 622px;
  }
  .box_2-enter-to {
    top: 200px;
    width: 622px;
  }
}
</style>

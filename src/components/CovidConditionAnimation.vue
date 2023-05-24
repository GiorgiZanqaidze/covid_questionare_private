<template>
  <transition name="box_2" v-if="prevPage === '/identify'">
    <div
      v-if="showBox"
      class="bg-darkRed absolute top-[200px] right-[600px] h-[229px] w-[229px] opacity-70 rounded-full"
    ></div>
  </transition>
  <transition name="box_3" v-if="prevPage === '/vaccine-condition'">
    <div
      v-if="showBox"
      class="bg-darkRed absolute top-[200px] right-[600px] h-[229px] w-[229px] opacity-70 rounded-full"
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
.box_2-enter-active,
.box_3-enter-active {
  transition: all 0.5s ease;
}

.box_2-enter-from {
  width: 60px;
  top: 190px;
  height: 60px;
  right: 400px;
  opacity: 0;
}

.box_2-enter-to,
.box_3-enter-to {
  top: 200px;
  width: 229px;
  height: 229px;
  opacity: 0.7;
  right: 600px;
}

.box_3-enter-from {
  width: 60px;
  top: 30px;
  height: 60px;
  right: 600px;
  opacity: 0;
}
</style>

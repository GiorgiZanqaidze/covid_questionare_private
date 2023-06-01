<template>
  <div class="flex flex-col items-center justify-center gap-10 font-arial">
    <transition name="logo">
      <img src="../assets/images/RB_LOGO.svg" alt="redberry" class="scale-[1]" v-if="showLogo" />
    </transition>
    <div class="h-44 relative w-60 overflow-hidden">
      <transition name="text">
        <RouterLink
          v-if="showText"
          @mouseover="mouseOverText"
          @mouseleave="mouseLeaveText"
          to="/identify"
          class="text-3xl text-center leading-9 font-semibold inline-block absolute bottom-[100px] z-20"
          >კითხვარის დაწყება</RouterLink
        >
      </transition>
      <RouterLink
        v-if="showText && mouseOver"
        to="/identify"
        class="text-3xl text-center leading-9 font-semibold inline-block absolute left-2 bottom-[98px] z-0"
        >კითხვარის დაწყება</RouterLink
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      showText: false,
      mouseOver: false,
      showLogo: false
    }
  },

  mounted() {
    this.showLogo = true
    this.showTextDelay()
  },

  methods: {
    showTextDelay() {
      setInterval(() => {
        this.showText = true
      }, 2000)
    },
    mouseOverText() {
      this.mouseOver = true
    },
    mouseLeaveText() {
      this.mouseOver = false
    }
  }
}
</script>

<style scoped>
.text-enter-active {
  transition: all 1s ease;
}

.text-enter-from {
  bottom: 250px;
}

.text-enter-to {
  bottom: 100px;
}

.logo-enter-active {
  transition: all 1s ease;
}

.logo-enter-from {
  transform: scale(100);
}

.logo-enter-to {
  transform: scale(1);
}
</style>

<template>
  <div class="flex flex-col items-center justify-center gap-10 font-arial">
    <transition name="logo">
      <img src="/RB_LOGO.png" alt="redberry" class="scale-[1]" v-if="showLogo" />
    </transition>
    <div class="h-44 relative w-44 overflow-hidden">
      <transition name="text">
        <RouterLink
          v-if="showText"
          @mouseover="mouseOverText"
          @mouseleave="mouseLeaveText"
          to="/identify"
          class="w-[220px] text-3xl text-center leading-9 font-semibold inline-block absolute bottom-[130px] z-20"
          >კითხვარის დაწყება</RouterLink
        >
      </transition>
      <RouterLink
        v-if="showText && mouseOver"
        to="/identify"
        class="w-[220px] text-3xl text-center leading-9 inline-block absolute left-1 bottom-[129px] z-0"
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
  bottom: 130px;
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

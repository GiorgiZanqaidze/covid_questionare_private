<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <transition name="box_6">
      <div
        v-if="showBox"
        class="bg-darkGray absolute top-[200px] right-[800px] h-[229px] w-[229px] rounded-full scale-[100]"
      ></div>
    </transition>
    <div class="absolute top-1/2 left-1/2">
      <transition name="text">
        <div
          v-if="showText"
          class="text-white absolute bottom-1/2 left-1/2 text-black-500 text-6xl font-semibold tracking-widest"
          style="transform: translateY(-50%) translate(-50%)"
        >
          <h1>მადლობა</h1>
        </div>
      </transition>
      <transition name="icon">
        <div
          v-if="showIcons"
          class="text-white absolute bottom-[100px] right-[80px] w-14"
          style="transform: translateY(-50%) translate(-50%)"
        >
          <img src="/src/assets/images/Frame2.svg" class="w-10" />
        </div>
      </transition>
      <transition name="icon_1">
        <div
          v-if="showIcons"
          class="text-white absolute top-[0px] left-[150px] w-7"
          style="transform: translateY(-50%) translate(-50%)"
        >
          <img src="/src/assets/images/Frame2.svg" class="w-10" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBox: false,
      showText: false,
      showIcons: false
    }
  },
  mounted() {
    this.showBox = true
    this.showDelayText()
    this.showIconsDelay()
  },

  methods: {
    showDelayText() {
      setInterval(() => {
        this.showText = true
      }, 1000)
    },
    showIconsDelay() {
      setInterval(() => {
        this.showIcons = true
      }, 2000)
    }
  }
}
</script>

<style scoped>
.box_6-enter-active {
  transition: all 1s ease;
}
.text-enter-active {
  transition: all 0.4s ease;
}

.text-enter-from {
  bottom: 100px;
  opacity: 0;
}

.text-enter-to {
  bottom: 50%;
  opacity: 1;
}

.icon-enter-active {
  transition: all 0.3s ease;
}

.icon-enter-from {
  right: 0px;
  bottom: 0px;
  opacity: 0;
}

.icon-enter-to {
  right: 80px;
  bottom: 100px;
  opacity: 1;
}

.icon_1-enter-active {
  transition: all 0.3s ease;
}

.icon_1-enter-from {
  left: 0px;
  top: -50px;
  opacity: 0;
}

.icon_1-enter-to {
  left: 150px;
  top: 0px;
  opacity: 1;
}

.box_6-enter-from {
  width: 60px;
  top: 190px;
  height: 60px;
  right: 500px;
  opacity: 0;
  transform: scale(0);
}

.box_6-enter-to {
  top: 200px;
  width: 229px;
  height: 229px;
  opacity: 1;
  right: 600px;
  transform: scale(20);
}
</style>

<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="font-arial">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<style>
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.2s ease-out;
}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all 0.2s ease-in;
}
</style>

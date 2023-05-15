<script setup>
import BaseWrapper from '../components/BaseWrapper.vue'
</script>

<template>
  <base-wrapper>
    <div class="flex flex-col items-center justify-center gap-10 font-arial">
      <img src="/RB_LOGO.png" alt="redberry" />
      <RouterLink to="/identify" class="w-[200px] text-3xl text-center leading-9 font-semibold"
        >კითხვარის დაწყება</RouterLink
      >
    </div>
  </base-wrapper>
</template>

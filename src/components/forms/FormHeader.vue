<template>
  <header class="w-[1524px] flex justify-between py-2 border-b-2 border-darkGray mx-auto">
    <div class="flex justify-center items-center">
      <img src="../../assets/images/RB_TEXT_LOGO.svg" alt="redberry" class="block" />
    </div>
    <div>
      <h1 class="text-3xl font-bold tracking-wider">{{ page }}/4</h1>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    page: String
  }
}
</script>

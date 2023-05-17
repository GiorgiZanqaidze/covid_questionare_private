<template>
  <base-wrapper>
    <div class="mt-12">
      <form-header :page="4"></form-header>
      <div class="flex justify-between">
        <Form @submit="onSubmit" class="w-[650px] flex flex-col mt-12 gap-12 relative"> </Form>
        <ImageContainer src="/bike.png" class="w-[703px]" />
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import ImageContainer from '../components/ImageContainer.vue'
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    ImageContainer
  }
}
</script>

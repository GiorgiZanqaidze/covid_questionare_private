<template>
  <base-wrapper>
    <div class="mt-12">
      <form-header :page="3"></form-header>
      <div class="flex justify-between w-full">
        <Form @submit="onSubmit" class="w-2/5 flex flex-col mt-12 gap-12 relative">
          <div class="flex flex-col w-3/4 gap-2 relative">
            <h1 class="text-base font-bold tracking-wide">უკვე აცრილი ხარ?*</h1>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_yes"
                name="had_vaccine"
                type="radio"
                value="true"
                class="inline"
                v-model="selectedOption"
                @change="changeCondition"
                rules="required"
              />
              <label for="vaccine_yes" class="inline-block ml-6">კი</label>
            </div>
            <div class="inline-block ml-3">
              <Field
                id="vaccine_no"
                name="had_vaccine"
                type="radio"
                value="false"
                class="inline"
                v-model="selectedOption"
                @change="changeCondition"
                rules="required"
              />
              <label for="vaccine_no" class="inline-block ml-6">არა</label>
            </div>
            <ErrorMessage name="condition" class="text-red-500 absolute text-sm left-3 top-32" />
          </div>
          <div class="w-full absolute bottom-10 flex gap-10 translate-x-1/4 justify-end">
            <router-link to="covid-condition" class="translate-x-2/4">
              <img src="/Vector_left.png" alt="vector_left"
            /></router-link>
            <button class="translate-x-2/4">
              <img src="/Vector_right.png" alt="vector_right" />
            </button></div
        ></Form>
        <ImageContainer src="/VaccineConditionImage.png" />
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

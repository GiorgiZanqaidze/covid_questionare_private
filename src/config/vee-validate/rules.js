// ===============================================================================================
// ===============================================================================================
// strategy #1
//                              Vee-Validate & @vee-validate/rules
//  if you need few rules, and want to declare them in more readable way, it's the best approach
// ===============================================================================================
// ===============================================================================================
import { defineRule } from 'vee-validate' // npm install vee-validate --save
import { required, email, min, alpha } from '@vee-validate/rules' // npm install @vee-validate/rules

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

defineRule('required', (value) => {
  if (!value || !value.length) {
    return 'ველის შევსება სავალდებულოა'
  }
  return true
})

defineRule('redberry_email', (value) => {
  if (!/^[a-zA-Z0-9.]+@redberry.ge$/.test(value)) {
    return 'უნდა აკმაყოფილებდეს რედბერის მეილის ფორმატს'
  }
  return true
})

//
defineRule('min_length', (value, [limit]) => {
  if (!value || !value.length) {
    return true
  }

  if (value.length < limit) {
    return `ველი უნდა შეიცავდეს მინიმუმ ${limit} სიმბოლოს`
  }

  return true
})

import { defineRule } from 'vee-validate'

defineRule('required_date', (value) => {
  if (!/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value)) {
    return 'თარიღის ველი უნდა აკმაყოფილებდეს ფორმატს'
  }
  return true
})

defineRule('required', (value) => {
  if (!value || !value.length) {
    return 'ველის შევსება სავალდებულოა'
  }
  return true
})

defineRule('alpha_name', (value) => {
  if (!/^[\p{L}]+$/u.test(value)) {
    return 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს'
  }
  return true
})

defineRule('alpha_surname', (value) => {
  if (!/^[\p{L}]+$/u.test(value)) {
    return 'გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს'
  }
  return true
})

defineRule('alpha', (value) => {
  if (!value || !value.length) {
    return 'ველის შევსება სავალდებულოა'
  }
  return true
})

defineRule('email', (value) => {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    return 'თქვენ მიერ შეყვანილი მეილი არასწორია'
  }
  return true
})

defineRule('redberry_email', (value) => {
  if (!/^[a-zA-Z0-9.]+@redberry.ge$/.test(value)) {
    return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
  }
  return true
})

//
defineRule('min_length_name', (value, [limit]) => {
  if (!value || !value.length) {
    return true
  }

  if (value.length < limit) {
    return `სახელის ველი უნდა შედგებოდეს მინიმუმ ${limit} სიმბოლოსგან`
  }

  return true
})

defineRule('max_length_name', (value, [limit]) => {
  if (value.length > limit) {
    return `სახელის ველი უნდა შედგებოდეს მაქსიმუმ ${limit} სიმბოლოსგან`
  }

  return true
})

defineRule('min_length_surname', (value, [limit]) => {
  if (!value || !value.length) {
    return true
  }

  if (value.length < limit) {
    return `გვარის ველი უნდა შედგებოდეს მინიმუმ ${limit} სიმბოლოსგან`
  }

  return true
})

defineRule('max_length_surname', (value, [limit]) => {
  if (value.length > limit) {
    return `გვარის ველი უნდა შედგებოდეს მაქსიმუმ ${limit} სიმბოლოსგან`
  }

  return true
})

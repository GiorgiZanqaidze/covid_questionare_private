export default {
  saveData(context, data) {
    const formData = {
      condition: data.condition,
      vaccine_condition: data.vaccine_condition,
      test_date: data.test_date,
      number: data.number
    }
    localStorage.setItem('CovidCondition', JSON.stringify(formData))
    context.commit('saveData', formData)
  }
}

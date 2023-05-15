export default {
  saveData(context, data) {
    const formData = {
      condition: data.condition,
      vaccine_condition: data.vaccine_condition
    }
    localStorage.setItem('CovidCondition', JSON.stringify(formData))
    context.commit('saveData', formData)
  }
}

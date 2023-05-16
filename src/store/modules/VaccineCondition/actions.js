export default {
  saveData(context, data) {
    const formData = {
      had_vaccine: data.had_vaccine
    }

    localStorage.setItem('VaccineCondition', JSON.stringify(formData))

    context.commit('saveData', formData)
  }
}

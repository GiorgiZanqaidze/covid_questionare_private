export default {
  saveData(context, data) {
    const formData = {
      had_vaccine: data.had_vaccine,
      vaccination_stage: data.vaccination_stage
    }

    localStorage.setItem('VaccineCondition', JSON.stringify(formData))

    context.commit('saveData', formData)
  }
}

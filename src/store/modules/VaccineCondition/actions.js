export default {
  saveData(context, data) {
    const formData = {
      had_vaccine: data.had_vaccine,
      vaccination_stage: data.vaccination_stage,
      i_am_waiting: data.i_am_waiting
    }

    localStorage.setItem('VaccineCondition', JSON.stringify(formData))

    context.commit('saveData', formData)
  }
}

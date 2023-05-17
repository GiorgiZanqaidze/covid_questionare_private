export default {
  saveData(context, data) {
    const formData = {
      had_covid: data.had_covid,
      had_antibody_test: data.had_antibody_test,
      test_date: data.test_date,
      number: data.number,
      covid_sickness_date: data.covid_sickness_date
    }

    localStorage.setItem('CovidCondition', JSON.stringify(formData))
    context.commit('saveData', formData)
  }
}

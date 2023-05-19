export default {
  saveData(state, payload) {
    state.inputs.had_covid = payload.had_covid
    state.inputs.had_antibody_test = payload.had_antibody_test
    state.inputs.test_date = payload.test_date
    state.inputs.number = payload.number
    state.inputs.covid_sickness_date = payload.covid_sickness_date
    // console.log(payload.condition)

    // state.inputs = { ...payload }
  }
}

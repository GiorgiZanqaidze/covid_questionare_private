export default {
  had_covid(state) {
    return state.inputs.had_covid
  },
  had_antibody_test(state) {
    return state.inputs.had_antibody_test
  },
  test_date(state) {
    return state.inputs.test_date
  },
  number(state) {
    return state.inputs.number
  },
  covid_sickness_date(state) {
    return state.inputs.covid_sickness_date
  }
}

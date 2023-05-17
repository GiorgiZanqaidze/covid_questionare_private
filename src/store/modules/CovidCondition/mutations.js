export default {
  saveData(state, payload) {
    state.inputs.selectedOption = payload.condition
    state.inputs.vaccineOption = payload.vaccine_condition
    state.inputs.test_date = payload.test_date
    state.inputs.number = payload.number
    // console.log(payload.condition)

    // state.inputs = { ...payload }
  }
}

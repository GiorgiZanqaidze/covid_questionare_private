export default {
  saveData(state, payload) {
    state.inputs.selectedOption = payload.condition
    state.inputs.vaccineOption = payload.vaccine_condition
    // console.log(payload.condition)

    // state.inputs = { ...payload }
  }
}

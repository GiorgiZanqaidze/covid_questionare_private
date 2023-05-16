export default {
  saveData(state, payload) {
    state.inputs.had_vaccine = payload.had_vaccine
    state.inputs.vaccination_stage = payload.vaccination_stage
    // console.log(payload.condition)

    // state.inputs = { ...payload }
  }
}

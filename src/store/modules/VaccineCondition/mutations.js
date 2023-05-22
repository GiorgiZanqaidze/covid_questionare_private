export default {
  saveData(state, payload) {
    state.inputs.had_vaccine = payload.had_vaccine
    state.inputs.vaccination_stage = payload.vaccination_stage
    state.inputs.i_am_waiting = payload.i_am_waiting
  }
}

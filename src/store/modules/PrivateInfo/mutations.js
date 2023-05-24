export default {
  saveData(state, payload) {
    state.inputs.first_name = payload.first_name
    state.inputs.last_name = payload.last_name
    state.inputs.email = payload.email
  }
}

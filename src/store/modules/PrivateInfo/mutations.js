export default {
  saveData(state, payload) {
    state.inputs.name = payload.name
    state.inputs.surname = payload.surname
    state.inputs.email = payload.email
    // state.inputs = { ...payload }
  }
}

export default {
  saveData(state, payload) {
    state.inputs.had_vaccine = payload.had_vaccine

    // console.log(payload.condition)

    // state.inputs = { ...payload }
  }
}

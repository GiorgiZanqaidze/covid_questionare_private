export default {
  first_name(state) {
    return state.inputs.first_name
  },
  last_name(state) {
    return state.inputs.last_name
  },
  email(state) {
    return state.inputs.email
  },

  getLocalData() {
    return JSON.parse(localStorage.getItem('IdentifyData'))
  }
}

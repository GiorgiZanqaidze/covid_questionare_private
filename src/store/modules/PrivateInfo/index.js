import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      inputs: {
        first_name: '',
        last_name: '',
        email: ''
      }
    }
  },

  mutations,
  actions,
  getters
}

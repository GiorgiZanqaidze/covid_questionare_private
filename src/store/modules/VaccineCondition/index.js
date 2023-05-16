import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      inputs: {
        had_vaccine: null,
        vaccination_stage: null
      }
    }
  },

  mutations,
  actions,
  getters
}

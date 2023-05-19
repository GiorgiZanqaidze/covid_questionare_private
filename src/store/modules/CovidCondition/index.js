import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      inputs: {
        had_covid: null,
        had_antibody_test: null,
        test_date: null,
        number: null,
        covid_sickness_date: null
      }
    }
  },

  mutations,
  actions,
  getters
}

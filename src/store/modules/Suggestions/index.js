import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      inputs: {
        non_formal_meetings: null,
        number_of_days_from_office: null,
        what_about_meetings_in_live: '',
        tell_us_your_opinion_about_us: ''
      }
    }
  },

  mutations,
  actions,
  getters
}

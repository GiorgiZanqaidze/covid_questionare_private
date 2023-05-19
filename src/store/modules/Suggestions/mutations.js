export default {
  saveData(state, payload) {
    state.inputs.non_formal_meetings = payload.non_formal_meetings
    state.inputs.number_of_days_from_office = payload.number_of_days_from_office
    state.inputs.what_about_meetings_in_live = payload.what_about_meetings_in_live
    state.inputs.tell_us_your_opinion_about_us = payload.tell_us_your_opinion_about_us
  }
}

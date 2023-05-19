export default {
  saveData(context, data) {
    const formData = {
      non_formal_meetings: data.non_formal_meetings,
      number_of_days_from_office: data.number_of_days_from_office,
      what_about_meetings_in_live: data.what_about_meetings_in_live,
      tell_us_your_opinion_about_us: data.tell_us_your_opinion_about_us
    }

    localStorage.setItem('Suggestions', JSON.stringify(formData))

    context.commit('saveData', formData)
  }
}

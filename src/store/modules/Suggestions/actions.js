import axios from 'axios'
import postCovidData from '../../../services/postService'

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
  },

  postData() {
    const suggestions = JSON.parse(localStorage.getItem('Suggestions'))
    const privateInfo = JSON.parse(localStorage.getItem('IdentifyData'))
    const vaccineCondition = JSON.parse(localStorage.getItem('VaccineCondition'))
    const covidCondition = JSON.parse(localStorage.getItem('CovidCondition'))

    const allInputs = {
      ...privateInfo,
      antibodies: {
        test_date: covidCondition.test_date,
        number: covidCondition.number
      },
      had_vaccine: JSON.parse(vaccineCondition.had_vaccine),
      vaccination_stage: vaccineCondition.vaccination_stage,
      i_am_waiting: vaccineCondition.i_am_waiting,
      ...covidCondition,
      ...suggestions
    }

    postCovidData(allInputs)
  }
}

import { createStore } from 'vuex'

import PrivateInfo from './modules/PrivateInfo/index.js'
import CovidCondition from './modules/CovidCondition/index.js'
import VaccineCondition from './modules/VaccineCondition/index.js'
const store = createStore({
  modules: {
    inputs_identify: PrivateInfo,
    inputs_covid_condition: CovidCondition,
    inputs_vaccine_condition: VaccineCondition
  }
})

export default store

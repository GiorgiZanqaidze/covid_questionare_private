import { createStore } from 'vuex'

import PrivateInfo from './modules/PrivateInfo/index.js'
import CovidCondition from './modules/CovidCondition/index.js'

const store = createStore({
  modules: {
    inputs_identify: PrivateInfo,
    inputs_covid_condition: CovidCondition
  }
})

export default store

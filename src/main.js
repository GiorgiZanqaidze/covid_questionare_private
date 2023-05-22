import './assets/main.css'
import store from './store/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseWrapper from './components/TheBaseWrapper.vue'
import FormHeader from './components/TheFormHeader.vue'
import RequiredInputsSign from './components/TheRequiredInputsSign.vue'
import RouterLink from './components/TheRouterLink.vue'
import Button from './components/TheButton.vue'

import './config/vee-validate/rules'

const app = createApp(App)
app.component('base-wrapper', BaseWrapper)
app.component('form-header', FormHeader)
app.component('required-inputs', RequiredInputsSign)
app.component('router-arrow-link', RouterLink)
app.component('submit-button', Button)
app.use(router)
app.use(store)

app.mount('#app')

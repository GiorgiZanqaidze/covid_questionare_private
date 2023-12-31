import './assets/main.css'
import store from './store/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseWrapper from './components/BaseWrapper.vue'
import FormHeader from './components/FormHeader.vue'
import RequiredInputsSign from './components/RequiredInputsSign.vue'
import RouterLink from './components/RouterLink.vue'
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

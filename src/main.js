import './assets/main.css'
import store from './store/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseWrapper from './components/BaseWrapper.vue'
import FormHeader from './components/forms/FormHeader.vue'
import RequiredInputsSign from './components/forms/RequiredInputsSign.vue'
const app = createApp(App)
app.component('base-wrapper', BaseWrapper)
app.component('form-header', FormHeader)
app.component('required-inputs', RequiredInputsSign)
app.use(router)
app.use(store)

app.mount('#app')

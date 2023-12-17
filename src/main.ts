import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import persistance from './data/persistance.json'
import type { Student } from './types/student'

const app = createApp(App)

const students : Array<Student> = persistance.students 

app.use(createPinia())
app.use(router)

app.mount('#app')

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDRHAyvlyeJvSDV8VIbgH8SAo-amGPoozE",
  authDomain: "vue-calendar-c450d.firebaseapp.com",
  databaseURL: "https://vue-calendar-c450d.firebaseio.com",
  projectId: "vue-calendar-c450d",
  storageBucket: "vue-calendar-c450d.appspot.com",
  messagingSenderId: "67849207595",
  appId: "1:67849207595:web:c5c4317a1db3dfc3408f6e"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

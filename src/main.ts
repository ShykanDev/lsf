import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU1tntNK53_XebqpV2tiWU02Djf_hkZzQ",
  authDomain: "los-estafadores.firebaseapp.com",
  projectId: "los-estafadores",
  storageBucket: "los-estafadores.firebasestorage.app",
  messagingSenderId: "791241665812",
  appId: "1:791241665812:web:b42c2fb3da29cb778ca601",
  measurementId: "G-M6RXF770X5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

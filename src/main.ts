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
  apiKey: "AIzaSyD4JIILuDmTn9WfGxMZkfpQecDL7_jnrFc",
  authDomain: "losestafadores-app.firebaseapp.com",
  projectId: "losestafadores-app",
  storageBucket: "losestafadores-app.firebasestorage.app",
  messagingSenderId: "554644200871",
  appId: "1:554644200871:web:d9bef23f2531e12d40aa82",
  measurementId: "G-4SPWHYDERC"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

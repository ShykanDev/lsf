import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh7SLebc5aHCXHcv1KvQzapUZ__XT_tgQ",
  authDomain: "los-estafadores-web.firebaseapp.com",
  projectId: "los-estafadores-web",
  storageBucket: "los-estafadores-web.firebasestorage.app",
  messagingSenderId: "48466918627",
  appId: "1:48466918627:web:5d7e59c85f677e9b3a99d6",
  measurementId: "G-Y5JXMDSZS2"
};

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill,PrComments,FaPenAlt,IoChatbubbleEllipsesOutline,BiReplyFill, BiReplyAll,RiLoader5Line, BiSkipEndFill,
  FaStoreAlt,
  FaMapMarkerAlt,
  FaMapPin,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaDollarSign,
  FaPhoneAlt,
  RiRefreshLine,
  RiDeleteBack2Line,
  IoSearchSharp,
  PrSortNumericDown,
  PrSortNumericUp,
  IoFlag,
  MdCheckcircleTwotone
 } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill,PrComments,FaPenAlt,IoChatbubbleEllipsesOutline,BiReplyFill, BiReplyAll,RiLoader5Line,BiSkipEndFill,
  FaStoreAlt,
  FaMapMarkerAlt,
  FaMapPin,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaDollarSign,
  FaPhoneAlt,
  RiRefreshLine,
  RiDeleteBack2Line,
  IoSearchSharp,
  PrSortNumericDown,
  PrSortNumericUp,
  IoFlag,
  MdCheckcircleTwotone
);

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
const app  = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(ElementPlus)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrSuSAit4YvvY9kVhi9xmXWWSF1ayJNaE",
  authDomain: "week8-xiaoguang.firebaseapp.com",
  projectId: "week8-xiaoguang",
  storageBucket: "week8-xiaoguang.appspot.com",
  messagingSenderId: "418485181580",
  appId: "1:418485181580:web:5d0243988013a8b5e8afa9",
  measurementId: "G-WXKGJNB8GG"
};


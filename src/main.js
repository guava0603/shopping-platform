import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Import firebase
const firebase = require('firebase/app');
require("firebase/firestore");
require("firebase/storage");
require("firebase/auth");

// Import moment.js
const moment = require('moment');

// Import axios
const axios = require('axios');

// Require for side effect
require("firebase/functions");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBBDvVW3Vc1P2kz7waCEe51-jZRCB0PlMs",
  authDomain: "kga-food-week.firebaseapp.com",
  databaseURL: "https://kga-food-week.firebaseio.com",
  projectId: "kga-food-week",
  storageBucket: "kga-food-week.appspot.com",
  messagingSenderId: "369225492625"
});

// Add Firebase to vue instance.
Vue.prototype.$firebase = firebase;
Vue.prototype.$db = firebase.firestore();
Vue.prototype.$cloudFunction = firebase.app().functions('asia-northeast1');

// Add moment
Vue.prototype.$moment = moment;

// Add axios
Vue.prototype.$axios = axios;

// Use Element UI
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

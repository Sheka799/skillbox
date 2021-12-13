import Vue from 'vue';
import App from './App.vue';
import { age, name } from './data';
import alertMessage from './message';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alertMessage(name);
alertMessage(age);

import Vue from 'vue'
import CountryFlag from 'vue-country-flag'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import store from '@/store';

import consts from './static/consts';

const registerConsts = Object.defineProperty(Vue.prototype, '$consts', {
  get() {
    return consts;
  },
});

Vue.component('country-flag', CountryFlag);
Vue.use(registerConsts);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

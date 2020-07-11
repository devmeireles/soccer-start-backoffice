import Vue from 'vue'
import Vuex from 'vuex'
import Data from './Data';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Data
  },
  state: {},
  actions: {},
  mutations: {},
  getters: {}
});

export default store;

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

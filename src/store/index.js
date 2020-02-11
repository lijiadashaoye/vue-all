import Vue from 'vue';
import Vuex from 'vuex';
import oneStore from './useNameSpace'

Vue.use(Vuex);

// 自定义插件，只有一个store参数
const myPlugin = store => {
  setTimeout(() => { // 插件内触发状态变动
    store.commit('getAge')
  }, 3000)
}

export default new Vuex.Store({
  modules: {
    oneStore
  },
  state: {
    age: 9
  },
  mutations: {
    getAge: (state) => {
      state.age++;
    }
  },
  actions: {
    getAge1: ({
      commit
    }) => {
      setTimeout(() => {
        commit('getAge')
      }, 500)
      return 99
    }
  },
  plugins: [myPlugin]
})
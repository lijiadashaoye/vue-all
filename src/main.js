import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 插入自定义指令
import directives from './directive';
for (let i in directives) {
  Vue.directive(i, directives[i])
}
// 插入自定义全局过滤器
import filters from './filter';
for (let i in filters) {
  Vue.filter(i, filters[i])
}

// 插入自定义全局过滤器
import plugins from './plugins';
Vue.use(plugins)

Vue.config.productionTip = false
new Vue({
  // 定义根数据，一般用于全局
  data: {
    data: 'main.js 里定义的根数据'
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
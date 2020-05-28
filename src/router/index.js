import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '../views/one.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'one',
    component: One,
    children: [{
      path: 'canshu/:kk',
      name: 'canshu',
      component: () => import( /* webpackChunkName: "canshu" */ '@/components/one/canshu.vue'),
    }]
  },
  {
    path: '/two',
    name: 'two',
    component: () => import( /* webpackChunkName: "two" */ '@/views/two.vue'),
    meta: { // 用来定义路由守卫用
      requiresAuth: true
    },
    // 写在路由配置里的守卫，类似 canActivate
    beforeEnter: (to, from, next) => {
      if (confirm(`在配置路由时，可以添加 beforeEnter 进行进入组件前的验证`)) {
        next();
      } else {
        next(false);
      }
    }
  },
  // {
  //   path: '/canshu/:kk',
  //   name: 'canshu',
  //   component: () => import( /* webpackChunkName: "canshu" */ '@/components/one/canshu.vue'),
  // },

  // 路由的重定向
  {
    path: '/four',
    redirect: {
      name: 'three'
    }
  },
  {
    path: '/three',
    name: 'three',
    component: () => import( /* webpackChunkName: "three" */ '@/views/three.vue'),
  },
  {
    path: '/css',
    name: 'css',
    component: () => import( /* webpackChunkName: "five" */ '@/views/five.vue'),
  },
  {
    path: '/js',
    name: 'js',
    component: () => import( /* webpackChunkName: "six" */ '@/views/six.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  // 设置路由跳转到页面后，向下滚动距离，全局的，每个页面都会执行，需要做判断逻辑
  scrollBehavior(...k) {
    // k是一个数组[to,from]
    let y = 0;
    if (k[0].name === 'two') {
      y = 1000;
    }
    return {
      x: 0,
      y: y
    }
  }
})

export default router
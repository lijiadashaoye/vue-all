// 使用axios
import http from './axios';
export default {
    // 插件通常用来为 Vue 添加全局功能。 插件的功能范围没有严格的限制—— 一般有下面几种：
    // 添加全局方法或者属性。 如: vue - custom - element
    // 添加全局资源： 指令 / 过滤器 / 过渡等。 如 vue - touch
    // 通过全局混入来添加一些组件选项。 如 vue - router
    // 添加 Vue 实例方法， 通过把它们添加到 Vue.prototype 上实现。
    // 一个库， 提供自己的 API， 同时提供上面提到的一个或多个功能
    // 全局过插件
    install: function (...plugin) {
        // console.log(plugin) // 参数是vue构造器
        plugin[0].prototype.$pluginFn = this.pluginFn;
        plugin[0].prototype.$http = http; // 将axios添加到全局
    },
    pluginFn: (val) => {
        return `自定义插件，传参：${val}`
    }

}
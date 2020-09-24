// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue
import Vue from 'vue'
// 引入App根组件
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 对应根目录下的index.html的id
  el: '#app',
  router,
  // 注册组件
  components: {App},
  // 使用组件的标签
  template: '<App/>'
})

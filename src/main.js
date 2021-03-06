// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store.js'

Vue.config.productionTip = false

console.log(store.state.count) // -> 0
// incrementをコミットする
store.commit('increment')
// もう一度アクセスしてみるとカウントが増えている
console.log(store.state.count) // -> 1

console.log(store.getters.count)
console.log(store.getters.max)
console.log(store.getters.item(1))
console.log(store.getters.name(1))


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // storeを登録
  render: h => h(App),
  components: { App },
  template: '<App/>'
})

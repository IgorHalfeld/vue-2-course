import Vue from 'vue'
import App from './App.vue'

Vue.filter('reverse', (value, param1, param2) => {
  console.log(value)
  console.log(param1)
  console.log(param2)
  return value.split('').reverse().join('')
})

new Vue({
  el: '#app',
  render: h => h(App)
})

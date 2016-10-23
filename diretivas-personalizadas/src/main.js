import Vue from 'vue'
import App from './App.vue'

Vue.directive('igor', ({
  bind (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  },
  inserted () {},
  updated () {},
  componentUpdated () {},
  unbind () {}
}))

new Vue({
  el: '#app',
  render: h => h(App)
})

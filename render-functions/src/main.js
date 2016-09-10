import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  methods: {
    hello () {
      alert('Hello!')
    }
  },
  render (h) {
    return (
      <div>
        <h1 on-click={this.hello}>Hello from JSX</h1>
      </div>
    )
  }
})

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      first: 'Igor',
      last: 'Luíz'
    }
  },
  mounted () {
    setTimeout(() => this.name = 'Halfeld Luíz', 2000)
  },
  computed: {
    name: {
      get () {
        return `${this.first} ${this.last}`
      },

      set (v) {
        const names = v.split(' ')
        this.first = names[0]
        this.last = names[1]
      }
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

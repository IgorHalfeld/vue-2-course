<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="item in list">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>

import { orderBy } from 'lodash'

export default {
  data () {
    return {
      items: [
        { name: 'maça' },
        { name: 'abacaxi' },
        { name: 'laranja' },
        { name: 'morango' }
      ]
    }
  },
  computed: {
    list () {
      return orderBy(this.items, 'asc')
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

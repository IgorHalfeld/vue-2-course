<template lang="html">
  <form>
    <input type="text" v-model="text" @input="sendMessage">
  </form>
</template>

<script>
import Bus from '../bus'

export default {
  data: () => ({
    text: ''
  }),
  methods: {
    sendMessage () {
      Bus.$emit('send:message', this.text)
    }
  }
}
</script>

<style lang="css">
</style>

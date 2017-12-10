<template lang="html">
  <article class="">
    <h2>{{ text }} </h2>
    <ArticleForm />
  </article>
</template>

<script>
import Bus from '../bus'
import ArticleForm from './articleForm.vue'

export default {
  components: { ArticleForm },
  data: () => ({
    text: ''
  }),
  mounted () {
    Bus.$on('send:message', (value) => this.text = value)
  }
}
</script>

<style lang="css">
</style>

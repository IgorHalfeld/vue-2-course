<template>
  <div id="app">
    <Header />
    <Article />
  </div>
</template>

<script>
import Header from './components/header/header.vue'
import Article from './components/article/article.vue'

export default {
  name: 'app',
  components: {
    Header,
    Article
  },
  data () {
    return {}
  }
}
</script>

<template>
  <div id="app">
    <Header :message="title" />
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
  data: () => ({
    title: 'Eventos'
  })
}
</script>

<template lang="html">
  <header>
    <h1>{{ message }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    message: { type: String }
  }
}
</script>

<template>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
  <button @click="goHome">Go Home</button>
</template>

<script>
export default {
  name: 'JobResultsPage',
  components: {},
  data() {
    return {}
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

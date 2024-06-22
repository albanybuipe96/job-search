<template>
  <div>Job Page for {{ currentJobId }}</div>
</template>

<script>
export default {
  name: 'JobPage',
  components: {},
  computed: {
    currentJobId() {
      return this.$route.params.id
    }
  }
}
</script>

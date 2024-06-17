<template>
  <button :class="{ primary }">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      default: 'Sign in'
    },
    primary: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply bg-brand-blue-1 hover:shadow-blue border-0 text-white;
}
.secondary {
}
</style>

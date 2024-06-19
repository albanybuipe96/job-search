<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'primary',
      required: false,
      validator: (value) => ['primary', 'secondary'].includes(value)
    }
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true
      }
    }
  }
}
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium transition-all duration-700;
}

.primary {
  @apply rounded bg-brand-blue-1 text-white hover:bg-brand-blue-2;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>

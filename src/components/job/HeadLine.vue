<template>
  <section class="mb-16">
    <h1 class="mb-14 text-7xl font-bold tracking-tighter">
      <span :class="actionClass">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-2xl font-light">Find your next job at Nexus Careers</h2>
  </section>
</template>

<script>
import { nextElementInList } from '@/utils/next-element-in-list'

export default {
  name: 'HeadLine',
  data() {
    return {
      action: 'Build',
      internal: null
    }
  },
  computed: {
    actionClass() {
      return { [this.action.toLowerCase()]: true }
    }
  },
  created() {
    this.changeAction()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeAction() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code']
        this.action = nextElementInList(actions, this.action)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>

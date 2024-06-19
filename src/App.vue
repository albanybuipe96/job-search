<template>
  <main-nav />
  <the-hero />
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import TheHero from '@/components/widgets/TheHero.vue'
export default {
  name: 'App',
  components: {
    MainNav,
    TheHero
  }
}
</script>

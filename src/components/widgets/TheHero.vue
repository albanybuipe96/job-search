<template>
  <main>
    <section class="flex h-screen flex-col bg-yellow-200 pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-blue-700">1 Col</div>
        <div class="col-span-5 col-start-2 border border-blue-700">5 Cols</div>
        <div class="col-span-5 col-start-7 border border-blue-700">1 Col</div>
        <div class="col-span-1 col-start-12 border border-blue-700">1 Col</div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'TheHero',
  beforeCreate() {
    console.log('TheHero beforeCreate')
  },
  created() {
    console.log('TheHero created')
  },
  beforeMount() {
    console.log('TheHero beforeMount')
  },
  mounted() {
    console.log('TheHero mounted')
  },
  beforeUpdate() {
    console.log('TheHero beforeUpdate')
  },
  updated() {
    console.log('TheHero updated')
  }
}
</script>

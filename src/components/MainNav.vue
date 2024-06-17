<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full first:ml-0" v-for="option in menu" :key="option.name">
              <a :href="option.url" class="flex h-full items-center py-2.5">{{ option.name }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center py-2.5">
          <profile-image @click="logout" v-if="isLoggedIn" />
          <action-button @click="login" v-else />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/widgets/ActionButton.vue'
import ProfileImage from './widgets/ProfileImage.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage
  },
  data() {
    return {
      company: 'Nexus Careers',
      url: 'https://careers.google.com',
      isLoggedIn: false,
      menu: [
        { name: 'Teams', url: '' },
        { name: 'Locations', url: '' },
        { name: 'Life at Nexus Careers', url: '' },
        { name: 'How we hire', url: '' },
        { name: 'Students', url: '' },
        { name: 'Jobs', url: 'https://careers.google.com' }
      ]
    }
  },
  methods: {
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
    }
  }
}
</script>

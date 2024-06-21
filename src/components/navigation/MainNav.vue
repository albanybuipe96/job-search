<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8 py-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center px-1 text-xl transition-all duration-500 hover:text-brand-blue-1"
          >Nexus Careers</router-link
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="option in menu" :key="option.name" class="ml-4 h-full first:ml-0">
              <router-link
                :to="option.url"
                class="mb-1 flex h-full items-center rounded-md bg-center px-2 py-2.5 transition-all duration-300 hover:text-brand-blue-2"
                >{{ option.name }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center py-2.5">
          <profile-image v-if="isLoggedIn" @click="logout" />
          <action-button v-else type="primary" text="Sign in" @click="login" />
        </div>
      </div>
      <sub-nav v-if="showSubNav" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue'
import ProfileImage from '@/components/navigation/ProfileImage.vue'
import SubNav from '@/components/navigation/SubNav.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    SubNav
  },
  data() {
    return {
      isLoggedIn: false,
      menu: [
        { name: 'Teams', url: '/' },
        { name: 'Locations', url: '/' },
        { name: 'Life at Nexus Careers', url: '/' },
        { name: 'How we hire', url: '/' },
        { name: 'Students', url: '/' },
        { name: 'Jobs', url: '/jobs/results' }
      ]
    }
  },
  computed: {
    headerHeightClass() {
      return {
        'h-32': this.isLoggedIn,
        'h-16': !this.isLoggedIn
      }
    },
    showSubNav() {
      return this.isLoggedIn // && this.$route.path === '/jobs/results'
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

<template>
  <div>
    <header class="shadow bg-slate-900">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/" class="flex flex-row items-center">
          <img src="~~/assets/images/ic_logo_amber.png" class="mr-4 h-8" alt="Flowbite Logo" />
          <span class="font-extrabold text-2xl text-amber-500">Amber</span>
        </NuxtLink>
        <ul class="flex items-center gap-10">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li>
            <NuxtLink v-if="!store.loggedIn" to="/signin">Log in</NuxtLink>
            <button v-else @click="logout" class="button w-full px-3 py-1 rounded-lg bg-amber-500 text-black hover:text-white font-bold">
              Log out
            </button>
          </li>
          <li>
            <NuxtLink v-if="!store.loggedIn" to="/signup">Sign up</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto p-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '~~/stores/authStore'

const store = useAuthStore()

function logout() {
  store.logout()
}
</script>

<style scoped>
li {
  color: #f1f5f9;
}
.router-link-exact-active {
  color: #f59e0b;
}
</style>

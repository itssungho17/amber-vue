<template>
  <div class="w-full h-full bg-home flex flex-col">
    <header class="h-[6%]">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/" class="flex flex-row">
          <img src="~~/assets/images/ic_logo_amber.png" class="mr-4 h-8" alt="Flowbite Logo" />
          <span class="font-extrabold text-2xl text-amber-500">Amber</span>
        </NuxtLink>
        <ul class="flex gap-10">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/signin">Sign in</NuxtLink></li>
          <li><NuxtLink to="/signup">Sign up</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="h-[94%]">
      <div class="h-full flex flex-row justify-start items-center">
        <div class="flex flex-col mx-36 text-white">
          <h1 class="text-7xl text-amber-500">Amber</h1>
          <h2 class="text-5xl mt-3">Expand Your Time, Space and Reality</h2>
          <p class="text-xl text-gray-50 mt-3">Start to record your favourite moments and explore limitless time, space and reality</p>
          <div class="items-start mt-8">
            <NuxtLink to="/signin" 
              class="bg-transparent hover:bg-amber-500 text-amber-500 hover:text-black text-xl font-bold rounded py-3 px-4 border border-amber-500 hover:border-transparent">
              JOIN NOW
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'home'
})
</script>

<style scoped>
.bg-home {
  background-image: url("~~/assets/images/bg_home.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
li {
  color: #f1f5f9;
}
.router-link-exact-active {
  color: #f59e0b;
}
</style>

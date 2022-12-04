<template>
  <div class="w-screen h-screen">
    <header class="h-[6%] shadow bg-black">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/" class="flex flex-row items-center">
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
      <slot />
    </main>
  </div>
</template>

<style scoped>
li {
  color: #f1f5f9;
}
.router-link-exact-active {
  color: #f59e0b;
}
</style>

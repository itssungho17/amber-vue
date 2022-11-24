<template>
  <div class="w-screen h-screen">
    <header class="h-[6%] shadow bg-slate-900">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-xl text-amber-500">Amber</NuxtLink>
        <ul class="flex gap-10">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/registration">Register</NuxtLink></li>
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

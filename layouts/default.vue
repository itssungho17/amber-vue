<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/ambers">Ambers</NuxtLink></li>
        <li><NuxtLink to="/ambers/1">Ambers1</NuxtLink></li>
      </ul>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<template>
  <div class="h-full flex flex-col justify-center items-center bg">
    <div class="w-96 bg-white border border-slate-300 pt-8 pb-4">
      <h1 class="text-center font-bold text-5xl text-amber-500">Amber</h1>
      <form class="w-full flex flex-col gap-1 mt-6">
        <div>
          <BaseInput type="email" :v-model="email" label="Sign in to Amber with one of your Amber accounts."
            placeholder="Sign-In ID (Email Address)" />
          <div class="p-2"></div>
          <BaseInput type="password" :v-model="password" label="Password" placeholder="Password" />
          <div class="mt-8 mx-4">
            <button class="w-full px-6 py-3 text-lg font-bold bg-blue-500 text-white rounded-lg block shadow-xl hover:text-white hover:bg-blu-800">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-white w-96 mt-3 py-4 border border-slate-300 text-center">
      <span class="text-sm mr-2">Don't have an account?</span>
      <NuxtLink to="/registration">
        <span class="text-sm text-blue-700 font-semibold">Sign up</span>
      </NuxtLink>
    </div>
    <div class="mt-3 text-center">
      <span class="text-lg text-white">Get the app</span>
      <div class="mt-3 flex space-x-4">
        <div class="app-store-logo"></div>
        <div class="google-play-store-logo"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'full-screen'
})

const email = ''
const password = ''
</script>

<style scoped>
.bg {
  background-image: url("~~/assets/images/bg_login.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.app-store-logo {
  width: 134px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~~/assets/images/ic_app_store_logo.svg");
}
.google-play-store-logo {
  width: 134px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~~/assets/images/ic_google_play_store_logo.png");
}
</style>

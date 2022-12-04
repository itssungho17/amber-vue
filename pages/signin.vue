<template>
  <div class="h-full bg-default flex flex-col justify-center items-center">
    <div class="w-96 bg-black pt-8 pb-4">
      <h1 class="text-center font-bold text-5xl text-amber-500">Amber</h1>
      <Form class="w-full flex flex-col mt-6" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="flex flex-col mx-6 gap-1">
          <BaseInput type="email" v-model="email" name="email" label="ID (Email Address)" placeholder="ID (Email Address)" />
          <span class="text-red-500 text-sm">{{ errors.email }}</span>
        </div>
        <div class="p-2"></div>
        <div class="flex flex-col mx-6 gap-1">
          <BaseInput type="password" v-model="password" name="password" label="Password" placeholder="Password" />
          <span class="text-red-500 text-sm">{{ errors.password }}</span>
        </div>
        <div class="mt-8 mx-6">
          <BaseButton>Login</BaseButton>
        </div>
      </form>
    </div>
    <div class="bg-black w-96 mt-3 py-4 text-center">
      <span class="text-sm text-white mr-2">Don't have an account?</span>
      <NuxtLink to="/signup">
        <span class="text-sm text-amber-500 font-semibold">Sign up</span>
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
import { Form, Field } from 'vee-validate'
import * as Yup from 'yup'

definePageMeta({
  layout: 'full-screen'
})

let email = ref('')
let password = ref('')

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required.').email('Email is invalid.'),
  password: Yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters.')
})

function onSubmit() {
  console.log('onSubmit=> ' + email.value + ', ' + password.value)
}
</script>

<style scoped>
.bg-default {
  background-image: url("~~/assets/images/bg_default.jpg");
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
  background-image: url("~~/assets/images/ic_logo_app_store.svg");
}
.google-play-store-logo {
  width: 134px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~~/assets/images/ic_logo_google_play_store.png");
}
</style>

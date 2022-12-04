<template>
  <div class="h-full bg-default flex flex-col justify-center items-center">
    <div class="w-96 bg-black pt-8 pb-4">
      <h1 class="text-center text-white font-bold text-2xl">Create your profile</h1>
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
        <div class="p-2"></div>
        <div class="flex flex-col mx-6 gap-1">
          <BaseInput type="password" v-model="confirmPassword" name="confirmPassword" label="Confirm password"
            placeholder="Confirm password" />
          <span class="text-red-500 text-sm">{{ errors.confirmPassword }}</span>
        </div>
        <div class="p-2"></div>
        <div class="flex flex-col mx-6 gap-1">
          <BaseInput type="text" v-model="firstname" name="firstname" label="First name" placeholder="First name" />
          <span class="text-red-500 text-sm">{{ errors.firstname }}</span>
        </div>
        <div class="p-2"></div>
        <div class="flex flex-col mx-6 gap-1">
          <BaseInput type="text" v-model="lastname" name="lastname" label="Last name" placeholder="Last name" />
          <span class="text-red-500 text-sm">{{ errors.lastname }}</span>
        </div>
        <div class="p-2"></div>
        <div class="flex flex-col mx-6 gap-1">
          <BaseInput type="text" v-model="phone" name="phone" label="Phone number" placeholder="Phone number" />
          <span class="text-red-500 text-sm">{{ errors.phone }}</span>
        </div>
        <div class="mt-8 mx-6">
          <BaseButton type="submit">Sign up</BaseButton>
        </div>
      </form>
    </div>
    <div class="bg-black w-96 mt-3 py-4 text-white text-center">
      <span class="text-sm mr-2">Already have an account?</span>
      <NuxtLink to="/signin">
        <span class="text-sm text-amber-500 font-semibold">Login</span>
      </NuxtLink>
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
let confirmPassword = ref('')
let firstname = ref('')
let lastname = ref('')
let phone = ref('')

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required.').email('Email is invalid.'),
  password: Yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters.'),
  confirmPassword: Yup.string().required('Confirm Password is required.')
        .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
  firstname: Yup.string().required('First name is required.'),
  lastname: Yup.string().required('Last name is required.'),
  phone: Yup.string().required('Phone number is required.')
})

function onSubmit() {
  console.log('onSubmit=> ' + email.value + ', ' + password.value + ', ' + firstname.value + ', ' + lastname.value + ', ' + phone.value)
}
</script>

<style scoped>
.bg-default {
  background-image: url("~~/assets/images/bg_default.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

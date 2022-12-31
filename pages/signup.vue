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
          <div class="relative">
            <BaseInput v-if="showPassword" type="text" v-model="password" name="password" label="Password" placeholder="Password" />
            <BaseInput v-else type="password" v-model="password" name="password" label="Password" placeholder="Password" />
            <div class="absolute top-1/2 right-2" @click="toggleShowPassword">
              <div v-if="showPassword" class=" bg-visible"></div>
              <div v-else class=" bg-invisible"></div>
            </div>
          </div>
          <span class="text-red-500 text-sm">{{ errors.password }}</span>
        </div>
        <div class="p-2"></div>
        <div class="flex flex-col mx-6 gap-1">
          <div class="relative">
            <BaseInput v-if="showPassword" type="text" v-model="confirmPassword" name="confirmPassword" label="Confirm password" placeholder="Confirm password" />
            <BaseInput v-else type="password" v-model="confirmPassword" name="confirmPassword" label="Confirm password" placeholder="Confirm password" />
            <div class="absolute top-1/2 right-2" @click="toggleShowPassword">
              <div v-if="showPassword" class=" bg-visible"></div>
              <div v-else class=" bg-invisible"></div>
            </div>
          </div>
          <span class="text-red-500 text-sm">{{ errors.confirmPassword }}</span>
        </div>
        <div class="p-2"></div>
        <div class="flex flex-col mx-6 gap-1">
          <BaseInput type="text" v-model="firstName" name="firstName" label="First name" placeholder="First name" />
          <span class="text-red-500 text-sm">{{ errors.firstName }}</span>
        </div>
        <div class="p-2"></div>
        <div class="flex flex-col mx-6 gap-1">
          <BaseInput type="text" v-model="lastName" name="lastName" label="Last name" placeholder="Last name" />
          <span class="text-red-500 text-sm">{{ errors.lastName }}</span>
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
import authService from '~~/services/auth.service'

definePageMeta({
  layout: 'full-screen'
})

let email = ref('')
let password = ref('')
let confirmPassword = ref('')
let firstName = ref('')
let lastName = ref('')
let phone = ref('')
let showPassword = ref(false)

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required.').email('Email is invalid.'),
  password: Yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters.'),
  confirmPassword: Yup.string().required('Confirm Password is required.')
        .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
  firstName: Yup.string().required('First name is required.'),
  lastName: Yup.string().required('Last name is required.'),
  phone: Yup.string().required('Phone number is required.')
})

function onSubmit() {
  let user = {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
  }
  
  authService.signup(user)
    .then(() => {
      alert('Hola ' + firstName.value + '! Please login with your email.')
      useRouter().push( { path: '/signin' } )
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
}

function toggleShowPassword() {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
.bg-default {
  background-image: url("~~/assets/images/bg_default.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-visible {
  width: 25px;
  height: 25px;
  background-image: url("~~/assets/images/icon_visible.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.bg-invisible {
  width: 25px;
  height: 25px;
  background-image: url("~~/assets/images/icon_invisible.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

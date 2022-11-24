import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const email = ref('')
  const firstName = ref('')
  const lastName = ref('')
  const accessToken = ref('')

  function register() {
    console.log(`register ${email.value.toString} ${firstName.value.toString} ${lastName.value.toString}`)
  }

  function logout() {
    email.value = ''
    firstName.value = ''
    lastName.value = ''
    accessToken.value = ''
  }

  return { email, firstName, lastName, accessToken, register, logout }
})

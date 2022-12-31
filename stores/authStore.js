import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {

  const email = ref('')
  const firstName = ref('')
  const lastName = ref('')
  const accessToken = ref('')
  const loggedIn = ref(false)

  function login(user) {
    console.log(user)
    email.value = user.email
    firstName.value = user.firstName
    lastName.value = user.lastName
    accessToken.value = user.accessToken
    loggedIn.value = true
  }

  function logout() {
    email.value = ''
    firstName.value = ''
    lastName.value = ''
    accessToken.value = ''
    loggedIn.value = false
  }

  return { email, firstName, lastName, accessToken, loggedIn, login, logout }
})

import axios from 'axios'
import { useAuthStore } from '~~/stores/authStore'

const API_URL = 'http://localhost:17000/v1/api/user/'

const store = useAuthStore()

class AuthService {

  login(user) {
    return axios.post(API_URL + 'login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (response.data.accessToken) {
        store.login(response.data)
      }

      return response.data
    })
  }

  logout() {
    store.logout()
  }

  signup(user) {
    return axios.post(API_URL + 'signup', {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
    })
    .then(response => {
      console.log(response)

      return response.data
    })
  }

}

const authService = new AuthService()
export default authService

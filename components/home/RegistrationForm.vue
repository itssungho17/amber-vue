<!-- <template>
  <form @submit.prevent="onSubmit">
    <BaseInput label="Email" type="email" :v-model="email" />
    <BaseInput label="Password" type="password" :v-model="password" />
    <BaseInput label="First Name" type="text" :v-model="firstName" />
    <BaseInput label="Last Name" type="text" :v-model="lastName" />
    <BaseInput label="Phone" type="text" :v-model="phone" />
    <BaseButton type="submit" name="button">Register</BaseButton>
  </form>
</template>

<script setup>
import { useAuthStore } from '~~/stores/authStore'

const email = ''
const password = ''
const firstName = ''
const lastName = ''
const phone = ''

const store = useAuthStore()

function onSubmit() {
  store.$patch({
    email: email,
    firstName: firstName,
    lastName: lastName
  })

  store.register()
  alert('onSubmit')
}



//     register() {
//       this.$store
//         // .dispatch('register', {
//         //   name: this.name,
//         //   email: this.email,
//         //   password: this.password
//         // })
//         // .then(() => { this.$router.push({ name: 'dashboard' }) })
//         // .catch(err => { this.status = err.response.status })
//     }
</script> -->

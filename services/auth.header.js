import authService from '~~/services/auth.service'

export default function authHeader() {
  let token = authService.store.accessToken

  if (token) {
    return { 'x-access-token': token }
  } else {
    return {}
  }
}

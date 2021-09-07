import { useMutation } from '@apollo/client'

import { SET_LOGIN } from '../graphql/mutations/setLogin'

export const useLogin = () => {
  const [ login, { loading, error }] = useMutation(SET_LOGIN)
  const loadingLogin = loading
  const errorLogin = error

  return [
    login,
    loadingLogin,
    errorLogin
  ]
}

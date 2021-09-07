import { useMutation } from '@apollo/client'

import { SET_SIGNUP } from '../graphql/mutations/setSignup'

export const useSignup = () => {
  const [ signup, { loading, error }] = useMutation(SET_SIGNUP)
  const loadingSignup = loading
  const errorSignup = error

  return [
    signup,
    loadingSignup,
    errorSignup
  ]
}

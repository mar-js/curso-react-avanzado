import React, { useContext } from 'react'

import { Context } from '@/assets/context/Context'

import { useSignup } from '@/assets/hooks/useSignup'
import { useLogin } from '@/assets/hooks/useLogin'

import { Helmet } from 'react-helmet'

import { UserForm } from '@/components/user-form'

import { Spinner } from './styles'

export const NotRegisteredUser = () => {
  const { auth, activeAuth } = useContext(Context)
  const [
    signup,
    loadingSignup,
    errorSignup
  ] = useSignup()
  const [
    login,
    loadingLogin,
    errorLogin
  ] = useLogin()

  const ON_SUBMIT_SIGNUP = async ({ email, password }) => {
    signup({
      variables: {
        input: {
          email,
          password
        }
      }
    })
      .then(({ data: { signup } }) => activeAuth(signup))
      .catch(err => console.error(err))
  }

  const ON_SUBMIT_LOGIN = async ({ email, password }) => {
    login({
      variables: {
        input: {
          email,
          password
        }
      }
    })
      .then(({ data: { login } }) => activeAuth(login))
      .catch(err => console.error(err))
  }

  return (
    <>
      <Helmet>
        { auth ? (
          <title>Inicio de sección | Petgram</title>
        ) : (
          <title>Registrarte | Petgram</title>
        ) }
        <meta name="description" content="Aquí controlaras si inicias sección o sales de la misma" />
      </Helmet>
      { auth ? (
        <>
          { loadingLogin ? (
            <Spinner />
          ) : (
            <UserForm
              title="Iniciar Sesión"
              onSubmit={ ON_SUBMIT_LOGIN }
              error={ errorLogin }
            />
          ) }
        </>
      ) : (
        <>
          { loadingSignup ? (
            <Spinner />
          ) : (
            <UserForm
              title="Registrarse"
              onSubmit={ ON_SUBMIT_SIGNUP }
              error={ errorSignup }
            />
          ) }
        </>
      ) }
    </>
  )
}

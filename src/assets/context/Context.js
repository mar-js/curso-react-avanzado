import React, { createContext, useState } from 'react'

import { useApolloClient } from '@apollo/client'

const DEFAULT_VALUE = {
  isAuth: false,
  handleAuth: () => {}
}

export const Context = createContext(DEFAULT_VALUE)

export const Provider = ({ children }) => {
  const [ auth, setAuth ] = useState(() => sessionStorage.getItem('token'))
  const CLIENT = useApolloClient()

  const VALUE = {
    auth,
    activeAuth: token => {
      setAuth(true)
      sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setAuth(false)
      sessionStorage.removeItem('token')
      CLIENT.clearStore()
    }
  }

  return (
    <Context.Provider value={ VALUE }>
      { children }
    </Context.Provider>
  )
}

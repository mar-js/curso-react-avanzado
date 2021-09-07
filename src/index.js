import React from 'react'
import { render } from 'react-dom'

import { Provider } from '@/assets/context/Context'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import { App } from './App'

const HTTP_LINK = createHttpLink({
  uri: 'https://petgram-server-clgg.vercel.app/graphql'
})

const AUTH_LINK = setContext((_, { headers }) => {
  const TOKEN = sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Bearer ${TOKEN}` : ''
    }
  }
})

const CLIENT = new ApolloClient({
  link: AUTH_LINK.concat(HTTP_LINK),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      sessionStorage.removeItem('token')
      location.href = '/'
    }
  })
})

render(
  <ApolloProvider client={ CLIENT }>
    <Provider>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

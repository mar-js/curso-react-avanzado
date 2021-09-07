import React, { useContext } from 'react'

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Context } from '@/assets/context/Context'

import { GlobalStyles } from '@/assets/styles/globalStyles'

import { Logo } from '@/components/logo'

import { Home } from '@/pages/home'
import { Detail } from '@/pages/detail'
import { Favs } from '@/pages/favs'
import { User } from '@/pages/user'
import { NotRegisteredUser } from './pages/not-registered-user'

import { NavBar } from '@/components/nav-bar'

export const App = () => {
  const { auth } = useContext(Context)

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo />
      <Switch>
        <Route exact path="/" component={ Home }>
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={ Home } />
        <Route exact path="/pet/:id" component={ Home } />
        <Route exact path="/detail/:id" component={ Detail } />
        <Route exact path="/favs" component={ auth ? Favs : NotRegisteredUser } />
        <Route exact path="/user" component={ auth ? User : NotRegisteredUser } />
      </Switch>
      <NavBar />
    </BrowserRouter>
  )
}

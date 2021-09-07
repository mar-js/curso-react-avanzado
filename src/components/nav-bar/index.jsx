import React from 'react'

import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

import { Nav, NavLinkR } from './styles'

export const NavBar = () => {
  const SIZE = '2.5rem'

  return (
    <Nav>
      <NavLinkR to="/home">
        <MdHome size={ SIZE } />
      </NavLinkR>
      <NavLinkR to="/favs">
        <MdFavoriteBorder size={ SIZE } />
      </NavLinkR>
      <NavLinkR to="/user">
        <MdPersonOutline size={ SIZE } />
      </NavLinkR>
    </Nav>
  )
}

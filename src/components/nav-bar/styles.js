import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

import { FadeIn } from '@/assets/styles/animation'

export const Nav = styled.nav`
  max-width: 50rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fcfcfc;
  border-top: .1rem solid #e0e0e0;
  box-shadow: 0 -.1rem .5rem rgba(0, 0, 0, .5);
`

export const NavLinkR = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888888;

  &[aria-current] {
    color: #333333;

    &::after {
      content: '.';
      position: absolute;
      bottom: 15%;
      font-size: 3.5rem;
      line-height: 2rem;
      ${FadeIn({ time: '.5s' })}
    }
  }
`

import styled, { css } from 'styled-components'

import { FadeIn } from '@/assets/styles/animation'

export const List = styled.ul`
  width: 100%;
  display: flex;
  overflow: scroll;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ fixed }) => fixed && css`
    max-width: 50rem;
    position: fixed;
    top: -20px;
    right: 0;
    left: 0;
    z-index: 1;
    margin: 0 auto;
    padding: .5rem;
    transform: scale(.5);
    background-color: #ffffff;
    border-radius: 6rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, .3);
    ${ FadeIn() }
  `}
`

export const Item = styled.li`
  padding: 1rem;
`

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { FadeIn } from '@/assets/styles/animation'

export const ContainerImg = styled.article`
  width: 100%;
  min-height: 20rem;
  margin-bottom: 2rem;
  border-bottom: .1rem solid #dddddd;
`

export const ImgWrapper = styled.figure`
  width: 100%;
  height: auto;
  margin: 0;
`

export const LinkR = styled(Link)`
  width: 100%;
  height: auto;
  text-decoration: none;
`

export const Image = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 1rem;
  ${ FadeIn() }
`

export const ButtonLike = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  align-self: center;
  font-size: 1.2rem;
  text-decoration: none;
  & svg {
    margin-right: .2rem;
  }
`

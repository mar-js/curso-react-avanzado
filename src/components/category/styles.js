import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const LinkR = styled(Link)`
  width: 6rem;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border: .1rem solid #dddddd;
  border-radius: 50%;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, .2);
`

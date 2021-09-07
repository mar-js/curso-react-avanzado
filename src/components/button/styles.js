import styled from 'styled-components'

export const Button = styled.input`
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  background-color: #529c00;
  color: #ffffff;
  border: none;

  &:hover {
    background-color: #ffffff;
    color: #529c00;
    outline: .1rem solid #529c00;
  }

  &:disabled {
    opacity: .5;

    &:hover {
      cursor: default;
      background-color: #529c00;
      color: #ffffff;
      outline: none;
    }
  }
`

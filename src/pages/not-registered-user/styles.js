import styled from 'styled-components'

export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    } 100% {
      transform: rotate(360deg);
    }
  }

  width: 6rem;
  height: 6rem;
  margin: auto;
  border: .6rem solid rgba(0, 0, 0, .1);
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s ease infinite;
`

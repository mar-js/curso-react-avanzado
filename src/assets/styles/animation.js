import { css, keyframes } from 'styled-components'

const KeyFrames = keyframes`
  from {
    filter: blur(.5rem);
    opacity: 0;
  } to {
    filter: blur(0);
    opacity: 1;
  }
`

export const FadeIn = ({
  time = '1s',
  type = 'ease'
} = {}) => css`animation: ${time} ${KeyFrames} ${type}`

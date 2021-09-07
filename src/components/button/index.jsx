import React from 'react'

import { Button } from './styles'

export const Btn = ({ title = '', disabled, handleClick }) => (
  <Button
    type="submit"
    value={ title }
    disabled={ disabled }
    onClick={ () => handleClick() }
  />
)

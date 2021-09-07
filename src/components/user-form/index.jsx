import React, { useState } from 'react'

import { Title } from '../title'
import { Btn } from '../button'

import { Form, Input, Error } from './styles'

export const UserForm = ({ title, onSubmit, error }) => {
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  })

  const HANDLE_SUBMIT = (e) => {
    e.preventDefault()

    const { email, password } = form

    onSubmit({
      email,
      password
    })
  }

  const HANDLE_CHANGE = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <>
      <Title title={ title } />
      <Form onSubmit={ HANDLE_SUBMIT }>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={ form.email }
          onChange={ HANDLE_CHANGE }
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={ form.password }
          onChange={ HANDLE_CHANGE }
          required
        />
        <Btn
          title={ title }
          disabled={ !form.email && !form.password }
        />
        { error && <Error>{ error.message }</Error> }
      </Form>
    </>
  )
}

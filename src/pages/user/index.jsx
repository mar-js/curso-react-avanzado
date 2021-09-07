import React, { useContext } from 'react'

import { Context } from '@/assets/context/Context'

import { Helmet } from 'react-helmet'

import { Title } from '@/components/title'
import { Btn } from '@/components/button'

export const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <>
      <Helmet>
        <title>Salir | Petgram</title>
        <meta name="description" content="Aquí controlaras si deseas cerrar tu sección" />
      </Helmet>
      <Title title="User" />
      <Btn
        title="Logout"
        handleClick={ removeAuth }
      />
    </>
  )
}

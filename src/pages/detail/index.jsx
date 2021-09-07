import React from 'react'
import { useParams } from 'react-router-dom'

import { useQuery } from '@apollo/client'

import { GET_PHOTO } from '@/assets/graphql/queries/getPhoto'

import { PhotoCard } from '@/components/photo-card'

import { Article } from './styles'
import { Helmet } from 'react-helmet'

export const Detail = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PHOTO, { variables: { id } })

  return (
    <>
      <Helmet>
        <title>Detalles | Petgram</title>
        <meta name="description" content="Aquí están los detalles de las fotos seleccionadas" />
      </Helmet>
      <Article>
        { loading && <span>Loading...</span> }
        { error && <span>{ error }</span> }
        { data && <PhotoCard key={ data.photo.id } { ...data.photo } /> }
      </Article>
    </>
  )
}

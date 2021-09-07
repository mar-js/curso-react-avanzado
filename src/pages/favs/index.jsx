import React from 'react'

import { Helmet } from 'react-helmet'

import { Title } from '@/components/title'
import { ListOfFavsPhotos } from '@/components/list-of-favs-photos'

export const Favs = () => (
  <>
    <Helmet>
      <title>Fotos favoritas | Petgram</title>
      <meta name="description" content="Aquí están tus fotos favoritas" />
    </Helmet>
    <Title title="Favs" />
    <ListOfFavsPhotos />
  </>
)

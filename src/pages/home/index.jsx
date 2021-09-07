import React from 'react'

import { useParams } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import { ListOfCategories } from '@/components/list-of-categories'
import { ListOfPhotoCards } from '@/components/list-of-photo-cards'

export const Home = () => {
  const { id } = useParams()

  return (
    <>
      <Helmet>
        <title>App de fotos de mascotas | Petgram</title>
        <meta name="description" content="Aquí encontrarás las mejores fotos de mascotas subidas por distintos usuarios" />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={ id } />
    </>
  )
}

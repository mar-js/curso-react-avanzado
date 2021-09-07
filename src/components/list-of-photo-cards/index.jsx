import React from 'react'

import { useQuery } from '@apollo/client'

import { GET_PHOTOS } from '@/assets/graphql/queries/getPhotos'

import { PhotoCard } from '../photo-card'

import { List } from './styles'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })

  return (
    <List>
      { loading && <span>Loading...</span> }
      { error && <span>{ error }</span> }
      { data && data.photos.map(photo => <PhotoCard key={ photo.id } { ...photo } />) }
    </List>
  )
}

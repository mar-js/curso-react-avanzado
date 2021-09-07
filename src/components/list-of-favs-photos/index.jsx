import React from 'react'

import { useQuery } from '@apollo/client'

import { GET_FAVORITIES } from '@/assets/graphql/queries/getFavorities'

import { PhotoCard } from '../photo-card'

import { List } from './styles'

export const ListOfFavsPhotos = () => {
  const { loading, error, data } = useQuery(GET_FAVORITIES, {
    fetchPolicy: 'cache-and-network'
  })

  return (
    <List>
      { loading && <span>Loading...</span> }
      { error && <span>{ error }</span> }
      { data && data.favs.map(photo => <PhotoCard key={ photo.id } { ...photo } favs />) }
    </List>
  )
}

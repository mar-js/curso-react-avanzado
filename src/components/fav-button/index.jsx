import React from 'react'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { ButtonLike } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = !liked ? MdFavoriteBorder : MdFavorite

  return (
    <ButtonLike
      onClick={ onClick }
      type="button"
    >
      <Icon size="20" />
      { likes } likes!
    </ButtonLike>
  )
}

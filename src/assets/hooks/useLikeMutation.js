import { useMutation } from '@apollo/client'

import { SET_LIKE_PHOTO } from '../graphql/mutations/setLikePhoto'

export const useLikeMutation = () => {
  const [ likeMutation ] = useMutation(SET_LIKE_PHOTO)

  return [ likeMutation ]
}

import { gql } from '@apollo/client'

export const SET_LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      likes
      liked
    }
  }
`

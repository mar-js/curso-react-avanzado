import { gql } from '@apollo/client'

export const GET_PHOTO = gql`
  query getPhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

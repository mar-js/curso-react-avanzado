import { gql } from '@apollo/client'

export const GET_FAVORITIES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

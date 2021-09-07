import React, { useEffect, useState } from 'react'

import { useQuery } from '@apollo/client'

import { GET_CATEGORIES } from '@/assets/graphql/queries/getCategories'

import { Category } from '../category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES)
  const [ showFixed, setShowFixed ] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const NEW_SHOW_FIXED = scrollY > 200
      showFixed !== NEW_SHOW_FIXED && setShowFixed(NEW_SHOW_FIXED)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [ showFixed ])

  if (error) console.log(error)

  const RenderList = (fixed) => (
    <List fixed={ fixed }>
      { loading ? (
        <Item>
          <Category />
        </Item>
      ) : (
        <>
          { data && data.categories.map(category => (
            <Item key={ category.id }>
              <Category { ...category } path={ category.id } />
            </Item>
          )) }
        </>
      ) }
    </List>
  )

  return (
    <>
      { RenderList() }
      { showFixed && RenderList(showFixed) }
    </>
  )
}

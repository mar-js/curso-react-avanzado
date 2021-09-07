import React, { useEffect, useRef, useState } from 'react'

import { useLikeMutation } from '@/assets/hooks/useLikeMutation'

import { FavButton } from '../fav-button'

import { ContainerImg, LinkR, ImgWrapper, Image } from './styles'

const DEFAULT_IMAGE = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.anime-planet.com%2Fimages%2Fcharacters%2Fhappy-1417.jpg%3Ft%3D1413868620&f=1&nofb=1'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE, favs }) => {
  const [ show, setShow ] = useState(false)
  const [ likeMutation ] = useLikeMutation()

  const ELEMENT = useRef(null)

  const HANDLE_CLICK_LIKE = () => likeMutation({ variables: { input: { id } } })

  useEffect(() => {
    const OBSERVER = new IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]

      if (isIntersecting) {
        setShow(true)
        OBSERVER.disconnect()
      }
    })

    OBSERVER.observe(ELEMENT.current)
  }, [ ELEMENT ])

  return (
    <ContainerImg ref={ ELEMENT }>
      { show && (
        <ImgWrapper>
          <LinkR to={ `/detail/${id}` }>
            <Image src={ src } />
          </LinkR>
          { favs ? null : (
            <figcaption>
              <FavButton
                liked={ liked }
                likes={ likes }
                onClick={ HANDLE_CLICK_LIKE }
              />
            </figcaption>
          ) }
        </ImgWrapper>
      ) }
    </ContainerImg>
  )
}

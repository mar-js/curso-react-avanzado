import React from 'react'

import { LinkR, Image } from './styles'

const DEFAULT_IMAGE = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.707aV_yHc2JdrXGoulY81gHaEK%26pid%3DApi&f=1'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <LinkR to={ `/pet/${path}` }>
    <Image
      src={ cover }
      alt={ emoji }
    />
    { emoji }
  </LinkR>
)

import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-data.js'

import { AlbumCoverWrapper } from './style'

export default memo(function AlbumCover(props) {

  //here: size = 100, width = 118 bgp = -570px
  const { info, size = 130, width = 100, bgp = "-845px" } = props

  return (
    <AlbumCoverWrapper width={width} bgp={bgp} size={size}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
        {/* href="/album?id=xxxx"" */}
        <a href="#" className="image_cover cover" title={info.name}>{info.name}</a>
      </div>
      <p className="album-name text-nowrap">
        {/* href="/album?id=xxxx"" */}
        <a href="#" title={info.name}>{info.name}</a>
      </p>
      <p className="artist text-nowrap">
        {/* href="/artist?id=xxxx"" */}
        <a title={info.artist.name}>{info.artist.name}</a>
      </p>
    </AlbumCoverWrapper>
  )
})

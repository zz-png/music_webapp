import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-data.js'
import {SingerCoverWrapper} from './style'

export default memo(function SingerCover(props) {
  const { info } = props
  return (
    <SingerCoverWrapper href={`https://music.163.com/#/user/home?id=${info.accountId}`} target="_blank">
      <div className="image-wrapper">
        <img src={getSizeImage(info.picUrl, 62)} alt="" />
      </div>
      <div className="info">
        <h4 className="singer-name">{info.name}</h4>
        <p>流行歌手</p>
      </div>
    </SingerCoverWrapper>
  )
})
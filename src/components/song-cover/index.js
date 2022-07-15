import React, { memo } from 'react'
import { getCount, getSizeImage } from '@/utils/format-data'
import { SongCoverWrapper } from './style'

// 歌曲封面组件
export default memo(function SongCover(props) {
  const { info, songList, width = 140 } = props
  // pic
  const picUrl = (info && info.picUrl) || (songList && songList.coverImgUrl) 
  // playCount 播放次数 
  const playCount = (info && info.playCount) || (songList && songList.playCount) || 0
  // name
  const name = (info && info.name) || (songList && songList.name) 
  // id
  const id = (info && info.id) || (songList && songList.id)
  
  return (
    <SongCoverWrapper width={width}>
      <div className="cover-wrapper">
        <img src={getSizeImage(picUrl, 140)} alt="" />
        {/* href="playlist=xxxx" */}
        <a href="#" className="cover-mask" title={name}></a>
        <div className="bottom-bar sprite_cover">
          <span>
            <i className="sprite_icon erji"></i>
            {getCount(playCount)}
          </span>
          {/* <a>click to play the music in this list</a> */}
          <i className="sprite_icon play"></i>
        </div>
      </div>
      {/* href="playlist=xxxx" */}
      <a href="#" className="cover-title" title={name}>{name}</a>
    </SongCoverWrapper>
  )
})

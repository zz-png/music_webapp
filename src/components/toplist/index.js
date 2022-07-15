import React, { memo } from 'react'
import {useDispatch} from 'react-redux'
import { getSizeImage } from '@/utils/format-data.js'
import { ToplistWrapper } from './style'

import {addToPlaylistAsync, changeCurrentSongAsync, changeFirstLoad, changeForcePlay} from '../playbar/redux/action'

export default memo(function Toplist(props) {

  // index = [0, [1, [2，分别表示不同的榜单（飙升榜，新歌榜，原创榜）
  const { info, index } = props
  const { tracks = [] } = info

  const dispatch = useDispatch()

  // 处理点击播放按钮
  const handlePlay = (e, id) => {
    // console.log('play button click', id);
    e.preventDefault()
    dispatch(changeFirstLoad(false))
    dispatch(changeForcePlay(Math.random()))
    dispatch(changeCurrentSongAsync(id))
  }

  const handleAddToList = (e, id) => {
    // console.log('add button click', id);
    e.preventDefault()
    dispatch(addToPlaylistAsync(id))
  }

  return (
    <ToplistWrapper>
      <div className="ranking-header">
        <div className="image-wrapper">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          {/* href="/discover/toplist?id=xxxx" */}
          <a href="#" className="mask" title={info.name}></a>
        </div>
        <div className="tit">
          <div>
            {/* href="/discover/toplist?id=xxxx" */}
            <a href="#" title={info.name}><h3>{info.name}</h3></a>
          </div>
          <div className="btn">
            {/* click here to play the music in the list */}
            <a href="#" className="sprite_02 text-indent play" title="播放">播放</a>
            <a href="#" className="sprite_02 text-indent favourite" title="收藏">收藏</a>
          </div>
        </div>
      </div>
      <ol className="ranking-list">
        {tracks &&
          tracks.length > 0 &&
          tracks.slice(0, 10).map((item, index) => {
            return (
              <li key={item.id} className="list-item">
                <span className="number" style={{color: index < 3 ? '#c10d0c' : '#666'}}>{index + 1}</span>
                {/* href="/song?id=xxxx" */}
                <a href="#" className="song-name text-nowrap" title={item.name}>{item.name}</a>
                <div className="operation">
                  {/* click to play music or add to playlist... */}
                  <a href="#" className="sprite_02 btn play" title="播放" 
                    onClick={e => handlePlay(e, item.id)}>
                  </a>
                  <a href="#" className="sprite_icon2 btn addto" title="添加到播放列表" 
                    onClick={e => handleAddToList(e, item.id)}>
                  </a>
                  <a href="#" className="sprite_02 btn favourite" title="收藏"></a>
                </div>
              </li>
            )
          })}
      </ol>
      <div className="ranking-footer">
        {/* href="/discover/toplist?id=UP_TOPLIST_ID or NEW_TOPLIST_ID..." */}
        <a href="#" className="show-all">查看全部&gt;</a>
      </div>
    </ToplistWrapper>
  )
})

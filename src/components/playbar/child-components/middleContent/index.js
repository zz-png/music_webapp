import React, {memo, useCallback} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {NavLink} from 'react-router-dom'


import {getSizeImage, formatTime} from '@/utils/format-data'
import {Slider} from 'antd'
import {MidWrapper} from './style'
import { changeLyricIndex } from '../../redux/action'

export default memo(function MidContent(props) {

  const {songIndex, playlist, lyriclist, lyricIndex} = useSelector((state) => ({
      songIndex: state.player.songIndex,
      playlist: state.player.playlist,
      lyriclist: state.player.lyriclist,
      lyricIndex: state.player.lyricIndex,
    })
  )
  const currentSong = playlist && playlist[songIndex]
  const lyric = lyriclist && lyriclist[songIndex]

  // playedTime
  const {musicdom, playTime, setPlayTime, sliderValue, setSliderValue, setFlag} = props

  // 拖动进度条
  const sliderBeforeChange = useCallback((value) => {
    // 拖动时让右边的播放时间跟着改变，进度条的值也要改变(红色色块跟随一起变)
    setFlag(true)
    let time = (value / 100) * currentSong.dt
    setPlayTime(time)
    setSliderValue(value)
  }, [currentSong])

  // 松开进度条
  const dispatch = useDispatch()
  const sliderAfterChange = useCallback((value) => {
    const time = (value * currentSong.dt) / 100000
    musicdom.current.currentTime = time
    // 更改歌词索引
    let i = 0
    for(; i < (lyric && lyric.length); i++) {
      if(time * 1000 < lyric[i].totalTime) {
        break
      }
    }
    i && dispatch(changeLyricIndex(i - 1))
    setFlag(false)
  },[currentSong])

  return (
    <MidWrapper>
      <NavLink to='/discover/song' className="sprite_player image">
        <img src={currentSong && getSizeImage(currentSong.al.picUrl, 34)} alt="" />
      </NavLink>
      <div className="play-detail">
        <div className="song-info">
          <NavLink to="/discover/song" className="song-name">{currentSong && currentSong.name}</NavLink>
          <a href="#" className="singer-name">{currentSong && currentSong.ar[0].name}</a>
        </div>
        <Slider tooltipVisible={false} value={sliderValue} onChange={sliderBeforeChange} onAfterChange={sliderAfterChange}/>
      </div>
      <div className="song-time">
        <span className="now-time">{formatTime(playTime)}</span>
        <span className="total-time">&nbsp;/&nbsp;{currentSong ? formatTime(currentSong.dt) : '00:00'}</span>
      </div>
    </MidWrapper>
  )
})

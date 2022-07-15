import React, {memo, useState, useCallback} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getAudioSrc} from '@/utils/format-data'
import {changePlaySequence, changeLyricIndex} from '../../redux/action'
import {DownloadOutlined, UndoOutlined} from '@ant-design/icons'
import {Slider} from 'antd'
import {CSSTransition} from 'react-transition-group'
import {RightWrapper} from './style'
import MusicList from './Musiclist'

export default memo(function RightControl(props) {

  // 组件自身状态

  // 是否展示音量条
  const [showVolume, setShowVolume] = useState(false)
  // 是否展示播放列表
  const [showPlaylist, setShowPlaylist] = useState(false)

  // props
  const {musicdom, playSequence, songIndex, playlist, replay, isPlaying} = props

  const currentSong = playlist[songIndex]

  const dispatch = useDispatch()

  // 展示音量条
  const handleVolume = (e) => {
    e.preventDefault()
    setShowVolume(!showVolume)
  }

  // 调整音量
  const changeVolume = (value) => {
    musicdom.current.volume = value / 100
  }

  // 更改播放顺序
  const handlePlaySequence = (e) => {
    e.preventDefault()
    dispatch(changePlaySequence((playSequence + 1) % 3))
  }

  // 重新播放
  const handleReplay = (e) => {
    e.preventDefault()
    // 更改歌词索引
    dispatch(changeLyricIndex(0))
    // 重新播放
    replay()
  }

  // 关闭播放列表的方法，传递给子组件
  const closePlaylist = useCallback(() => {
    setShowPlaylist(!showPlaylist)
  }, [showPlaylist])


  return (
    <RightWrapper playSequence={playSequence}>
      <div className="left">
        <a target="_blank" rel="noopener noreferrer" title="下载音乐" className="l-control download" 
          href={currentSong && getAudioSrc(currentSong.id)}>
          <DownloadOutlined />
        </a>
        <a href="#" title="重新播放" className="l-control refresh" onClick={handleReplay}><UndoOutlined /></a>
      </div>
      <div className="right sprite_player">
        <a href="#" title="音量" className="sprite_player r-control volume" onClick={handleVolume}></a>
        <a href="#" title={playSequence === 0 ? "顺序播放" : playSequence === 1 ? "随机播放" : "单曲循环"} 
          className="sprite_player r-control loop" onClick={handlePlaySequence}></a>
        <a href="#" title="播放列表" className="sprite_player r-control playlist"
          onClick={(e) => {e.preventDefault(); setShowPlaylist(!showPlaylist)}}>
          {playlist.length}
        </a>
      </div>
      {/* 播放列表 */}
      {/* 添加过渡动画 */}
      <CSSTransition in={showPlaylist} timeout={3000} classNames="playlist">
        <MusicList showPlaylist={showPlaylist} closePlaylist={closePlaylist}
          playlist={playlist} isPlaying={isPlaying} songIndex={songIndex}>
        </MusicList>
      </CSSTransition>
      {/* Slide 音量条 */}
      <div className="sprite_player top-volume" style={{ display: showVolume ? 'block' : 'none'}}
        onMouseLeave={() => {setShowVolume(false)}}>
        <Slider vertical defaultValue={30} onChange={changeVolume}/>
      </div>
    </RightWrapper>
  )
})

import React, {memo, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {changeCurrentSong} from '../../redux/action'
import {getAudioSrc} from '@/utils/format-data'
import {LeftWrapper} from './style'

export default memo(function LeftControl(props) {

  const {musicdom, isPlaying, setIsPlaying, playSequence, songIndex, playlistLength} = props

  // 处理播放按钮
  const playMusic = useCallback(() => {
    // console.log('before: ', isPlaying);
    setIsPlaying(!isPlaying)
    // console.log('after: ', isPlaying);
    // 上面两行输出的内容相同，说明还没有重新渲染组件 => 并不是执行完setIsPlaying它就立刻改变了
    if(isPlaying) {
      musicdom.current.pause()
    } else {
      musicdom.current.play()
    }
  }, [isPlaying])

  // 切换歌曲
  const dispatch = useDispatch()

  const switchSong = (tag) => {
    // 随机数
    let randomNum = Math.floor(Math.random() * playlistLength)
    while(randomNum === songIndex) {
      randomNum = Math.floor(Math.random() * playlistLength)
    }
    switch(playSequence) {
      case 1:
        dispatch(changeCurrentSong(randomNum))
        break
      default:
        dispatch(changeCurrentSong((playlistLength + songIndex + tag) % playlistLength))
    }
  }

  return (
    <LeftWrapper isPlaying={isPlaying}>
      <button className="sprite_player pre" onClick={() => switchSong(-1)}></button>
      <button className="sprite_player play" onClick={playMusic}></button>
      <button className="sprite_player next" onClick={() => switchSong(1)}></button>
    </LeftWrapper>
  )
})

import React, {memo, useEffect, useState, useRef} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {changeCurrentSong, changeLyricIndex} from './redux/action'
import {getAudioSrc} from '@/utils/format-data'

import {PlayerbarWrapper} from './style'
import LeftControl from './child-components/leftControl';
import MidContent from './child-components/middleContent';
import RightControl from './child-components/rightControl';


export default memo(function PlayerBar() {

  // 组件自身state

  // 是否正在播放
  const [isPlaying, setIsPlaying] = useState(false)
  // 歌曲播放时间
  const [playTime, setPlayTime] = useState(0)
  // Slider进度条的值
  const [sliderValue, setSliderValue] = useState(0)
  // 拖动进度条时，若audio中的onTimeUpdate事件也在更改进度会有bug，应该让拖动进度条的优先级更高
  // flag为true表示正在拖动滑块改变进度，此时audio中的onTimeUpdate事件不应该再更改进度条(播放时间与进度值)
  const [flag, setFlag] = useState(false)

  // 获取redux数据
  const {playlist, songIndex, firstLoad, playSequence, forcePlay, lyriclist, lyricIndex} = useSelector(state => ({
    playlist: state.player.playlist,
    songIndex: state.player.songIndex,
    firstLoad: state.player.firstLoad,
    playSequence: state.player.playSequence,
    forcePlay: state.player.forcePlay,
    lyriclist: state.player.lyriclist,
    lyricIndex: state.player.lyricIndex,
  }), shallowEqual)
  // 当前播放歌曲
  const currentSong = playlist && playlist[songIndex]
  // 当前歌曲的歌词
  const lyric = lyriclist && lyriclist[songIndex]

  // 保存audio节点
  const audioRef = useRef()

  const dispatch = useDispatch()
  // isPlaying 控制歌曲是否播放(true播放，false暂停)
  // 将isPlaying状态分离出来监听，方便控制 切换歌曲 或 点击播放时 是否直接播放
  // 因为切换歌曲不一定直接播放（如果当前播放歌曲是暂时状态的，切到上一首或下一首应该也要暂停）
  // 而点击播放按钮，就直接播放（不管当前歌曲是否暂停，都直接播放点击的那首歌曲）
  useEffect(() => {
    isPlaying && audioRef.current.play()
  }, [isPlaying])
 
  useEffect(() => {
    // 当前歌曲索引改变后，重新设置音频src
    audioRef.current.src = currentSong && getAudioSrc(currentSong.id)
    // 设置音量
    audioRef.current.volume = 0.3;
    // 将歌词索引重新置0
    dispatch(changeLyricIndex(0))
    // 通过isPlaying状态来控制播放，如果是暂停状态，那么切换歌曲也不要播放
    if(isPlaying) {
      setIsPlaying(true + Math.random())
    }
  }, [songIndex])

  // 点击播放按钮直接播放，不管当前歌曲是否暂停
  useEffect(() => {
    // 第一次加载时不要自动播放(点击播放按钮后更改firstLoad为false => 点击就直接播放)
    if(!firstLoad) {
      setIsPlaying(true + Math.random())
    }
  }, [forcePlay])


  // 利用audio中的onTimeUpdate更新歌曲的播放时间
  const updatePlayTime = (e) => {
    const currentTime = e.target.currentTime
    if(!flag) {
      setPlayTime(currentTime * 1000)
      setSliderValue(((currentTime * 1000) / currentSong.dt) * 100);
    }

    // 随播放时间，获取当前的歌词
    let i = lyricIndex
    for(; i < (lyric && lyric.length); i++) {
      if(currentTime * 1000 < lyric[i].totalTime){
        break
      }
    }
    if(lyricIndex !== i - 1) {
      i && dispatch(changeLyricIndex(i - 1))
    }
  }

  // 处理歌曲播放结束，选择下一首歌曲
  const handleEnding = () => {
    let randomNum = Math.floor(Math.random() * playlist.length)
    while(randomNum === songIndex) {
      randomNum = Math.floor(Math.random() * playlist.length)
    }
    switch(playSequence) {
      // 随机播放
      case 1:
        dispatch(changeCurrentSong(randomNum))
        break
      // 单曲循环
      case 2:
        audioRef.current.currentTime = 0
        audioRef.current.play()
        break
      // 顺序播放      
      default:
        dispatch(changeCurrentSong((songIndex + 1) % playlist.length))
    }
  }

  // 重新播放，传给RightControl组件
  const replay = () => {
    audioRef.current.currentTime = 0
    setIsPlaying(true + Math.random())
  }

  return (
    <PlayerbarWrapper className="sprite_player">
      <div className="w980 content">
        <LeftControl musicdom={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
          playSequence={playSequence} songIndex={songIndex} playlistLength={playlist.length}>
        </LeftControl>
        <MidContent musicdom={audioRef} playTime={playTime} setPlayTime={setPlayTime} 
          sliderValue={sliderValue} setSliderValue={setSliderValue}
          setFlag={setFlag}>
        </MidContent>
        <RightControl musicdom={audioRef} playSequence={playSequence} songIndex={songIndex} 
          playlist={playlist} replay={replay} isPlaying={isPlaying}>
        </RightControl>
      </div>
      <audio ref={audioRef} id="audio" onTimeUpdate={updatePlayTime} preload="auto" onEnded={handleEnding}/>
    </PlayerbarWrapper>
  );
});

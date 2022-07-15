import {CHANGE_PLAYLIST, CHANGE_SONG_INDEX, CHANGE_FIRST_LOAD, CHANGE_PLAY_SEQUENCE,
  CHANGE_FORCE_PLAY, CHANGE_LYRIC_LIST, CHANGE_LYRIC_INDEX,
} from './constants'
import {sendReqToGetSongDetail, sendReqToGetLyric} from '@/service/player'
import {parseLyric} from '@/utils/parse-lyric'

// 获取歌曲详情用于添加到播放列表
export const addToPlaylist = data => ({type: CHANGE_PLAYLIST, data})
// 更改歌词列表
export const changeLyriclist = data => ({type: CHANGE_LYRIC_LIST, data})

export const addToPlaylistAsync = (id) => {
  return async (dispatch, getState) => {
    // 先判断播放列表中是否已存在该歌曲
    const playlist = getState().player.playlist
    const lyriclist = getState().player.lyriclist
    // 存在，直接返回
    if(playlist.findIndex(obj => obj.id === id) !== -1){
      return
    }
    // // 不存在，请求歌曲详情
    // sendReqToGetSongDetail(id).then(res => {
    //   res.songs && dispatch(addToPlaylist([...playlist, res.songs[0]]))
    // })
    // // 请求歌词信息
    // sendReqToGetLyric(id).then(res => {
    //   const lyric = res.lrc && res.lrc.lyric && parseLyric(res.lrc.lyric)
    //   lyric && dispatch(changeLyriclist([...lyriclist, lyric]))
    // })

    // 控制添加顺序，让歌曲与歌词一一对应（能实现，但不是最优，因为实际上异步请求不需要顺序执行，可以用promise.all再优化）
    const song = await sendReqToGetSongDetail(id).then(res => {return res.songs && res.songs[0]})
    const lyric = await sendReqToGetLyric(id).then(res => {return res.lrc && res.lrc.lyric && parseLyric(res.lrc.lyric)})
    song && dispatch(addToPlaylist(song))
    lyric && dispatch(changeLyriclist(lyric))
  }
}

// 播放音乐，修改当前索引值
export const changeCurrentSong = data => ({type: CHANGE_SONG_INDEX, data})

export const changeCurrentSongAsync = (id) => {
  return (dispatch, getState) => {
    // 先查找播放列表是否存在该歌曲
    const playlist = getState().player.playlist
    const lyriclist = getState().player.lyriclist
    // 若存在，则修改当前歌曲的索引为查找到的索引值
    const index = playlist.findIndex(obj => obj.id === id)
    if(index !== -1){
      dispatch(changeCurrentSong(index))
      return
    }
    // // 若不存在，则发送请求获取详情，（1）添加到播放列表，（2）修改索引值
    // sendReqToGetSongDetail(id).then(res => {
    //   res.songs && dispatch(addToPlaylist([...playlist, res.songs[0]]))
    //   dispatch(changeCurrentSong(playlist.length))
    // })
    // // 不存在，请求歌词信息
    // sendReqToGetLyric(id).then(res => {
    //   const lyric = res.lrc && res.lrc.lyric && parseLyric(res.lrc.lyric)
    //   lyric && dispatch(changeLyriclist([...lyriclist, lyric]))
    // })
    
    // 歌曲与歌词对应, promise.all实现
    const songPromise = sendReqToGetSongDetail(id).then(res => {return res.songs && res.songs[0]})
    const lyricPromise = sendReqToGetLyric(id).then(res => {return res.lrc && res.lrc.lyric && parseLyric(res.lrc.lyric)})
    Promise.all([songPromise, lyricPromise]).then(([song, lyric]) => {
      song && dispatch(addToPlaylist(song))
      dispatch(changeCurrentSong(playlist.length))
      lyric && dispatch(changeLyriclist(lyric))
    })
  }
}

// 第一次加载时不要自动播放音乐（在切换歌曲的时候才自动播放）
export const changeFirstLoad = data => ({type: CHANGE_FIRST_LOAD, data})

// 更该播放顺序
export const changePlaySequence = data => ({type: CHANGE_PLAY_SEQUENCE, data})

// 更改强制播放的值，调用useEffect中的回调
export const changeForcePlay = data => ({type: CHANGE_FORCE_PLAY, data})

// 更改当前歌词
export const changeLyricIndex= data => ({type: CHANGE_LYRIC_INDEX, data})
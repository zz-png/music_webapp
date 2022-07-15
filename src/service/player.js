import axios from './myAxios'

//获取歌曲详情(name, id, artist...)
export function sendReqToGetSongDetail(id) {
  return axios({
    url: '/song/detail',
    params: {
      ids: id
    },
  })
}

//获取歌词信息
export function sendReqToGetLyric(id) {
  return axios({
    url: '/lyric',
    params: {
      id
    },
  })
}
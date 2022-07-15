import axios from './myAxios'

//获取首页轮播图
export function sendReqToGetTopBanners() {
  return axios({
    url: '/banner'
  })
}

//获取热门推荐
export function sendReqToGetHotRec(limit) {
  return axios({
    url: '/personalized',
    params: {
      limit
    }
  })
}

//获取新碟上架
export function sendReqToGetNewAlbum(limit) {
  return axios({
    url: '/album/newest'
  })
}

//获取榜单
export function sendReqToGetRecToplist(id) {
  return axios({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

//获取入驻歌手
export function sendReqToGetSettleSinger(limit) {
  return axios({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
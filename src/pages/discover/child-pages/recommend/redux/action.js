import {
  GET_TOP_BANNER, GET_HOT_RECOMMEND, GET_NEW_ALBUM,
  GET_UP_TOPLIST, GET_NEW_TOPLIST, GET_ORIGIN_TOPLIST,
  UP_TOPLIST_ID, NEW_TOPLIST_ID, ORIGIN_TOPLIST_ID, GET_SETTLE_SINGER
} from './constants'

import {
  sendReqToGetTopBanners, 
  sendReqToGetHotRec, 
  sendReqToGetNewAlbum,
  sendReqToGetRecToplist,
  sendReqToGetSettleSinger
} from '@/service/recommend'


//同步Action

//获取轮播图
export const getTopBanner = (data) => ({type: GET_TOP_BANNER, data})
//获取热门推荐
export const getHotRecommend = (data) => ({type: GET_HOT_RECOMMEND, data})
//获取新碟上架
export const getNewAlbum = (data) => ({type: GET_NEW_ALBUM, data})
//获取飙升榜单
export const getUpToplist = (data) => ({type: GET_UP_TOPLIST, data})
//获取新歌榜单
export const getNewToplist = (data) => ({type: GET_NEW_TOPLIST, data})
//获取原创榜单
export const getOriginToplist = (data) => ({type: GET_ORIGIN_TOPLIST, data})
//获取入驻歌手
export const getSettleSinger = (data) => ({type: GET_SETTLE_SINGER, data})


//异步Action

export const getTopBannerAsync = () => {
  return dispatch => {
    sendReqToGetTopBanners().then(res => dispatch(getTopBanner(res.banners)))
  }
}

export const getHotRecAsync = (limit) => {
  return dispatch => {
    sendReqToGetHotRec(limit).then(res => dispatch(getHotRecommend(res.result)))
  }
}

export const getNewAlbumAsync = () => {
  return dispatch => {
    sendReqToGetNewAlbum().then(res => dispatch(getNewAlbum(res.albums)))
  }
}

export const getToplistAsync = (id) => {
  return dispatch => {
    sendReqToGetRecToplist(id).then(res => {
      switch (id) {
        case UP_TOPLIST_ID:
          dispatch(getUpToplist(res.playlist))
          break
        case NEW_TOPLIST_ID:
          dispatch(getNewToplist(res.playlist))
          break
        case ORIGIN_TOPLIST_ID:
          dispatch(getOriginToplist(res.playlist))
          break
        default:
      }
    })
  }
}

export const getSettleSingerAsync = (limit) => {
  return dispatch => {
    sendReqToGetSettleSinger(limit).then(res => dispatch(getSettleSinger(res.artists)))
  }
}
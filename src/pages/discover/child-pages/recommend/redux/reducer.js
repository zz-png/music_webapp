import produce from 'immer'

import {
  GET_TOP_BANNER, GET_HOT_RECOMMEND, GET_NEW_ALBUM, 
  GET_UP_TOPLIST, GET_NEW_TOPLIST, GET_ORIGIN_TOPLIST, GET_SETTLE_SINGER
} from './constants'

const initState = {
  topBanner: [],
  hotRecommend: [],
  newAlbum: [],
  toplist_up: {},
  toplist_new: {},
  toplist_origin: {},
  settleSinger: []
}

export default produce((draft = initState, action) => {
  const {type, data} = action
  switch(type) {
    case GET_TOP_BANNER:
      draft.topBanner = data
      break
    case GET_HOT_RECOMMEND:
      draft.hotRecommend = data
      break
    case GET_NEW_ALBUM:
      draft.newAlbum = data
      break      
    case GET_UP_TOPLIST:
      draft.toplist_up = data
      break
    case GET_NEW_TOPLIST:
      draft.toplist_new = data
      break
    case GET_ORIGIN_TOPLIST:
      draft.toplist_origin = data
      break
    case GET_SETTLE_SINGER:
      draft.settleSinger = data
      break
    default:
      return draft
  }
})
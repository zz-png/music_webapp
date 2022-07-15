import {combineReducers} from 'redux'

import recommendReducer from '@/pages/discover/child-pages/recommend/redux/reducer'
import playerReducer from '@/components/playbar/redux/reducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const playerPersistConfig = {
  key: 'player',
  storage,
  whitelist: ['playlist', 'songIndex', 'lyriclist',]
}


export default combineReducers({
  recommend: recommendReducer,
  player: persistReducer(playerPersistConfig, playerReducer),
})
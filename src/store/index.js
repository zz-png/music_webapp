import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import persistReducer from './reducer'
import {persistStore} from 'redux-persist'

export const store = createStore(persistReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)

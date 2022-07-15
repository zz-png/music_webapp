import React, {memo} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import PlayerBar from './components/playbar'
import {Provider} from 'react-redux'
import {store, persistor} from './store'
import {PersistGate} from 'redux-persist/integration/react'

export default memo(function App() {
  return(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <AppHeader></AppHeader>
          {renderRoutes(routes)}
          <AppFooter></AppFooter>
          <PlayerBar></PlayerBar>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
})

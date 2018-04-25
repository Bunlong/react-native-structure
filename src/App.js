import React, {Component} from 'react'
import { Stack, Scene, Router } from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './config/store/configureStore'
import Login from './components/Login'

const RouterWithRedux = connect()(Router)
const store = configureStore()

export default class App extends Component { 
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Stack key="root">
            <Scene 
              key='login' 
              component={Login} 
              title='Login' 
            />
            <Scene 
              key='profile' 
              component={Login} 
              title='Profile' 
            />
          </Stack>
        </RouterWithRedux>
      </Provider>
    )
  }
}

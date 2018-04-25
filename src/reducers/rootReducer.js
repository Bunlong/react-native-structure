import {combineReducers} from 'redux'
import nav, * as fromNav from './navReducer'
import login, * as fromLogin from './loginReducer'

export default combineReducers({
  nav,
  login,
})

export const getNav = (state) =>
  fromNav.getNav(state.nav)

export const getLogin = (state) => 
  fromLogin.getLogin(state.login)

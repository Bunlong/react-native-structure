import * as actionTypes from '../actionTypes'

const DEFAULT_STATE = {onLoggin: false}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.ON_LOGGIN:
      return {...state, onLogging: true}
    default:
      return state
  }
}

export const getLogin = ({onLogging}) => ({
  onLogging
})

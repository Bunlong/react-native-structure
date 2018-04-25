import { ActionConst } from 'react-native-router-flux'

const DEFAULT_STATE = {scene: {}}

export default function reducer(state = DEFAULT_STATE, action = {}) {
  switch(action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene,
      }
    default:
      return state
  }
}

export const getNav = ({scene}) => ({
  scene
})

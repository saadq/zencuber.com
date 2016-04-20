import { CHANGE_MODE } from '../constants'


const mode = (state = 'normal', action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.mode

    default:
      return state
  }
}

export default mode

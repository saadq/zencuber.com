import { START_TIMER, STOP_TIMER, ADD_TIME } from '../constants'
import { generateScramble } from '../../util'

const initialState = {
  isOn: false,
  algorithm: generateScramble(),
  allTimes: []
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isOn: true,
        startedAt: Date.now(),
        stoppedAt: undefined
      }

    case STOP_TIMER:
      return {
        ...state,
        isOn: false,
        stoppedAt: Date.now(),
        algorithm: generateScramble()
      }

    case ADD_TIME:
      return {
        ...state,
        allTimes: [action.time, ...state.allTimes]
      }

    default:
      return state
  }
}

export default timer

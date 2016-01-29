import { START_TIMER, STOP_TIMER, ADD_TIME, REMOVE_TIME } from '../constants'
import * as constants from '../constants'
import { generateScramble } from '../../util'

const initialState = {
  isOn: false,
  algorithm: generateScramble(),
  times: []
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
        times: [action.newTime, ...state.times]
      }

    case REMOVE_TIME:
      return {
        ...state,
        times: [
          ...state.times.slice(0, action.timeId),
          ...state.times.slice(action.timeId + 1)
        ]
      }

    default:
      return state
  }
}

export default timer

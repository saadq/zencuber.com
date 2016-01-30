import { START_TIMER, STOP_TIMER } from '../constants'
import { ADD_TIME, REMOVE_TIME, CLEAR_TIMES } from '../constants'
import { CHANGE_MODE, CHANGE_INSPECTION } from '../constants'
import { generateScramble } from '../../util'

const initialState = {
  isOn: false,
  algorithm: generateScramble(),
  times: [],
  mode: 'normal',
  inspectionTime: 0
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

    case CLEAR_TIMES:
      return {
        ...state,
        times: []
      }

    case CHANGE_MODE:
      return {
        ...state,
        mode: action.mode
      }

    case CHANGE_INSPECTION:
      return {
        ...state,
        inspectionTime: action.inspectionTime
      }

    default:
      return state
  }
}

export default timer

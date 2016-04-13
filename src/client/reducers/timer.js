import { START_TIMER, STOP_TIMER, START_BREAKPOINT, STOP_BREAKPOINT } from '../constants'
import { ADD_TIME, REMOVE_TIME, CLEAR_TIMES } from '../constants'
import { CHANGE_MODE } from '../constants'
import { generateScramble } from '../../util'

const initialState = {
  isOn: false,
  algorithm: generateScramble(),
  times: [],
  mode: 'normal',
  step: 0
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
        algorithm: generateScramble(),
        step: 0
      }

    case START_BREAKPOINT:
      return {
        ...state,
        isOn: true,
        step: state.step + 1
      }

    case STOP_BREAKPOINT:
      return {
        ...state,
        breakpoints: [
          ...state.breakpoints,
          {
            id: action.id,
            startedAt: Date.now(),
            stoppedAt: undefined
          }
        ]
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
        mode: action.mode,
        breakpointsOn: action.mode !== 'normal',
        step: 0
      }

    default:
      return state
  }
}

export default timer

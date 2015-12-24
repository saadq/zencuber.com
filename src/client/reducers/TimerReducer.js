import { formatTime } from '../../util'
import * as types  from '../constants/TimerActions'

const initialState = {
  isOn: false,
  time: formatTime(0)
}

function TimerReducer(state = initialState, action) {
  switch (action.type) {
    case types.START_TIMER:
      return {
        ...state,
        isOn: true,
        offset: Date.now()
      }

    case types.STOP_TIMER:
      return {
        ...state,
        isOn: false
      }

    case types.RESET_TIMER:
      return {
        ...state,
        time: formatTime(initialState.time)
      }

    case types.TICK:
      return {
        ...state,
        time: formatTime(state.time + action.time)
      }

    default:
      return state
  }
}

export default TimerReducer

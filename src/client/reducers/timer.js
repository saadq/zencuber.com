import { START_TIMER, STOP_TIMER } from '../constants'
import { generateScramble } from '../../util'

const initialState = {
  isOn: false,
  algorithm: generateScramble()
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

    default:
      return state
  }
}

export default timer

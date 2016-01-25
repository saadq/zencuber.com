import { generateScramble } from '../../util'

const initialState = {
  isOn: false,
  algorithm: generateScramble(),
  time: 0,
  allTimes: []
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        isOn: true,
        startedAt: Date.now(),
        stoppedAt: undefined
      }

    case 'STOP_TIMER':
      return {
        ...state,
        isOn: false,
        stoppedAt: Date.now(),
        algorithm: generateScramble()
      }

    case 'RESET_TIMER':
      return {
        ...initialState,
        allTimes: state.allTimes
      }

    default:
      return state
  }
}

export default timer

const initialState = {
  baseTime: 0,
  startedAt: undefined,
  stoppedAt: undefined
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: Date.now(),
        stoppedAt: undefined
      }

    case 'STOP_TIMER':
      return {
        ...state,
        isOn: false,
        stoppedAt: Date.now()
      }

    case 'RESET_TIMER':
      return initialState

    default:
      return state
  }
}

export default timer

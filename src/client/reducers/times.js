import { ADD_TIME, REMOVE_TIME, CLEAR_TIMES } from '../constants'

const times = (state = [], action) => {
  switch (action.type) {
    case ADD_TIME:
      return [
        action.newTime,
        ...state
      ]

    case REMOVE_TIME:
      return [
        ...state.slice(0, action.timeId),
        ...state.slice(action.timeId + 1)
      ]

    case CLEAR_TIMES:
      return []

    default:
      return state
  }
}

export default times

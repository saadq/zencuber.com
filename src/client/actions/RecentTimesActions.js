import { ADD_TIME, REMOVE_TIME, CLEAR_TIMES } from '../constants'

export function addTime (newTime) {
  return {
    type: ADD_TIME,
    newTime
  }
}

export function removeTime (timeId) {
  return {
    type: REMOVE_TIME,
    timeId
  }
}

export function clearTimes () {
  return {
    type: CLEAR_TIMES
  }
}

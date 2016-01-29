import { ADD_TIME, REMOVE_TIME, CLEAR_TIMES } from '../constants'

export function addTime(newTime) {
  return {
    type: ADD_TIME,
    newTime
  }
}

export function removeTime() {
  return {
    type: REMOVE_TIME
  }
}

export function clearTimes() {
  return {
    type: CLEAR_TIMES
  }
}

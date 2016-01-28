import { ADD_TIME, REMOVE_TIME, CLEAR_TIMES } from '../constants'

export function addTime(time) {
  return {
    type: ADD_TIME,
    time
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

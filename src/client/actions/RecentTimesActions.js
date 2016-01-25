import { ADD_TIME, REMOVE_TIME, CLEAR_TIMES } from '../constants'

export function addTime() {
  return {
    type: ADD_TIME
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

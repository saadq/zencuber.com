import { START_TIMER, STOP_TIMER, RESET_TIMER } from '../constants'

export function startTimer(baseTime) {
  return {
    type: START_TIMER,
    baseTime
  }
}

export function stopTimer() {
  return {
    type: STOP_TIMER
  }
}

export function resetTimer() {
  return {
    type: RESET_TIMER
  }
}

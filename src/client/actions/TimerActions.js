import { START_TIMER, STOP_TIMER, START_BREAKPOINT } from '../constants'

export function startTimer() {
  return {
    type: START_TIMER
  }
}

export function stopTimer() {
  return {
    type: STOP_TIMER
  }
}

export function startBreakpoint() {
  return {
    type: START_BREAKPOINT
  }
}

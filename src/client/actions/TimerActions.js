import { START_TIMER, STOP_TIMER, START_BREAKPOINT, STOP_BREAKPOINT } from '../constants'

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

export function startBreakpoint(id) {
  return {
    type: START_BREAKPOINT,
    id
  }
}

export function stopBreakpoint(id) {
  return {
    type: STOP_BREAKPOINT,
    id
  }
}

/**
 * @flow
 */

import type { TimerAction, AsyncAction } from '../types'

let timeoutId

/**
 * Initializes the timer after a small time period
 * unless cancellation is requested.
 */

function initializeTimer(): AsyncAction {
  return async (dispatch, getState) => {
    dispatch(startInitializeTimer())
    timeoutId = setTimeout(() => dispatch(initializeTimerSuccess()), 350)
  }
}

/**
 * Cancels the timer initialization.
 */

function cancelTimerInitialization(): TimerAction {
  clearTimeout(timeoutId)
  return {
    type: 'CANCEL_TIMER_INITIALIZATION'
  }
}

/**
 * Triggers the timer to start initialization.
 */

function startInitializeTimer(): TimerAction {
  return {
    type: 'START_INITIALIZE_TIMER'
  }
}

/**
 * Signals that the timer is ready for use.
 */

function initializeTimerSuccess(): TimerAction {
  return {
    type: 'INITIALIZE_TIMER_SUCCESS'
  }
}

/**
 * Starts running the timer.
 */

function startTimer(startTime: number): TimerAction {
  return {
    type: 'START_TIMER',
    startTime
  }
}

/**
 * Stops running the timer.
 */

function stopTimer(stopTime: number): TimerAction {
  return {
    type: 'STOP_TIMER',
    stopTime
  }
}

export {
  startTimer,
  stopTimer,
  initializeTimer,
  cancelTimerInitialization,
  startInitializeTimer,
  initializeTimerSuccess
}

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

function startTimer(): TimerAction {
  return {
    type: 'START_TIMER',
    startTime: Date.now()
  }
}

/**
 * Stops running the timer.
 */

function stopTimer(): TimerAction {
  return {
    type: 'STOP_TIMER',
    stopTime: Date.now()
  }
}

export { startTimer, stopTimer, initializeTimer, cancelTimerInitialization }

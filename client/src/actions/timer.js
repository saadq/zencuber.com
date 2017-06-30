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
    dispatch(startTimerInitialization())
    timeoutId = setTimeout(() => dispatch(timerInitializationSuccess()), 350)
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

function startTimerInitialization(): TimerAction {
  return {
    type: 'START_TIMER_INITIALIZATION'
  }
}

/**
 * Signals that the timer is ready for use.
 */

function timerInitializationSuccess(): TimerAction {
  return {
    type: 'TIMER_INITIALIZATION_SUCCESS'
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
  startTimerInitialization,
  timerInitializationSuccess
}

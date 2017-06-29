/**
 * @flow
 */

import type { TimerAction, AsyncAction } from '../types'

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
 * Stops the running timer.
 */

function stopTimer(): TimerAction {
  return {
    type: 'STOP_TIMER',
    stopTime: Date.now()
  }
}

/**
 * Attempts to initialize the timer. Initialization is cancelled
 * if the space bar is released too early.
 */

function initializeTimer(): AsyncAction {
  return async (dispatch, getState) => {
    dispatch(startInitializeTimer())
    await sleep(500)
    getState().timer.initialization.shouldCancel
      ? dispatch(initializeTimerFailure())
      : dispatch(initializeTimerSuccess())
  }
}

/**
 * Adds a cancellation token to the state in order to
 * signal the timer to fail the initialization.
 */

function cancelInitializeTimer(): TimerAction {
  return {
    type: 'CANCEL_INITIALIZE_TIMER'
  }
}

/**
 * Starts the timer initialization.
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
 * Signals that the timer needs to be reinitialized.
 */

function initializeTimerFailure(): TimerAction {
  return {
    type: 'INITIALIZE_TIMER_FAILURE'
  }
}

/**
 * A Promise wrapper around setTimeout.
 */

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export { startTimer, stopTimer, initializeTimer, cancelInitializeTimer }

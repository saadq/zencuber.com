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
    timeoutId = setTimeout(() => dispatch(finishTimerInitialization()), 350)
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

function finishTimerInitialization(): TimerAction {
  return {
    type: 'FINISH_TIMER_INITIALIZATION'
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

/**
 * Unpauses the timer.
 *
 * After the timer has been stopped, it is then automatically paused so that it
 * doesn't immediately start again if the space bar was pressed to stop the
 * timer. Instead of starting it again, it is unpaused and the timer can be used
 * again.
 */

function unpauseTimer() {
  return {
    type: 'UNPAUSE_TIMER'
  }
}

export {
  startTimer,
  stopTimer,
  initializeTimer,
  cancelTimerInitialization,
  startTimerInitialization,
  finishTimerInitialization,
  unpauseTimer
}

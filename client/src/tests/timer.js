/**
 * @flow
 */

import test from 'ava'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer from '../reducers/timer'
import {
  startTimer,
  stopTimer,
  initializeTimer,
  cancelTimerInitialization,
  startTimerInitialization,
  timerInitializationSuccess
} from '../actions/timer'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

test('timer actions', async t => {
  const now = Date.now()
  t.deepEqual(startTimer(now), { type: 'START_TIMER', startTime: now })
  t.deepEqual(stopTimer(now), { type: 'STOP_TIMER', stopTime: now })
  t.deepEqual(startTimerInitialization(), {
    type: 'START_TIMER_INITIALIZATION'
  })
  t.deepEqual(timerInitializationSuccess(), { type: 'TIMER_INITIALIZATION_SUCCESS' })
  t.deepEqual(cancelTimerInitialization(), {
    type: 'CANCEL_TIMER_INITIALIZATION'
  })
})

test.serial('async timer actions', async t => {
  const initialState = { status: 'uninitialized' }
  const store = mockStore({ timer: initialState })

  await store.dispatch(initializeTimer())
  await sleep(350) // Wait for timer to initialize

  const expectedActions = [
    { type: 'START_TIMER_INITIALIZATION' },
    { type: 'TIMER_INITIALIZATION_SUCCESS' }
  ]

  const actualActions = store.getActions()
  t.deepEqual(expectedActions, actualActions)
})

test('it can start initializing the timer', async t => {
  const state = { status: 'uninitialized' }
  const expected = { status: 'initializing' }
  const actual = reducer(state, startTimerInitialization())
  t.deepEqual(expected, actual)
})

test('it can succeed at initializing the timer', async t => {
  const state = { status: 'initializing' }
  const expected = { startTime: null, stopTime: null, status: 'ready' }
  const actual = reducer(state, timerInitializationSuccess())
  t.deepEqual(expected, actual)
})

test('it can fail at initializing the timer', async t => {
  const state = { status: 'initializing' }
  const expected = { status: 'uninitialized' }
  const actual = reducer(state, cancelTimerInitialization())
  t.deepEqual(expected, actual)
})

test('it can start the timer', async t => {
  const now = Date.now()

  const state = {
    status: 'ready'
  }

  const expected = {
    startTime: now,
    status: 'running'
  }

  const actual = reducer(state, startTimer(now))

  t.deepEqual(expected, actual)
})

test('it can stop the timer', async t => {
  const now = Date.now()

  const state = {
    startTime: 1497207435325,
    status: 'running'
  }

  const expected = {
    startTime: 1497207435325,
    stopTime: now,
    status: 'uninitialized'
  }

  const actual = reducer(state, stopTimer(now))

  t.deepEqual(expected, actual)
})

/**
 * Helpers
 */

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

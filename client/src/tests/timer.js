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
  startInitializeTimer,
  initializeTimerSuccess
} from '../actions/timer'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

test('timer actions', async t => {
  const now = Date.now()
  t.deepEqual(startTimer(now), { type: 'START_TIMER', startTime: now })
  t.deepEqual(stopTimer(now), { type: 'STOP_TIMER', stopTime: now })
  t.deepEqual(startInitializeTimer(), { type: 'START_INITIALIZE_TIMER' })
  t.deepEqual(initializeTimerSuccess(), { type: 'INITIALIZE_TIMER_SUCCESS' })
  t.deepEqual(cancelTimerInitialization(), {
    type: 'CANCEL_TIMER_INITIALIZATION'
  })
})

test.serial('async timer actions', async t => {
  const initialState = { isOn: false, initialization: { status: 'idle' } }
  const store = mockStore({ timer: initialState })

  await store.dispatch(initializeTimer())
  await sleep(350) // Wait for timer to initialize

  const expectedActions = [
    { type: 'START_INITIALIZE_TIMER' },
    { type: 'INITIALIZE_TIMER_SUCCESS' }
  ]

  const actualActions = store.getActions()
  t.deepEqual(expectedActions, actualActions)
})

test('it can start initializing the timer', async t => {
  const state = { isOn: false, initialization: { status: 'idle' } }
  const expected = { isOn: false, initialization: { status: 'pending' } }
  const actual = reducer(state, startInitializeTimer())
  t.deepEqual(expected, actual)
})

test('it can succeed at initializing the timer', async t => {
  const state = { isOn: false, initialization: { status: 'pending' } }
  const expected = {
    isOn: false,
    startTime: null,
    stopTime: null,
    initialization: { status: 'success' }
  }
  const actual = reducer(state, initializeTimerSuccess())
  t.deepEqual(expected, actual)
})

test('it can fail at initializing the timer', async t => {
  const state = { isOn: false, initialization: { status: 'pending' } }
  const expected = { isOn: false, initialization: { status: 'failure' } }
  const actual = reducer(state, cancelTimerInitialization())
  t.deepEqual(expected, actual)
})

test('it can start the timer', async t => {
  const now = Date.now()

  const state = {
    isOn: false,
    initialization: {
      status: 'success'
    }
  }

  const expected = {
    isOn: true,
    startTime: now,
    initialization: {
      status: 'success'
    }
  }

  const actual = reducer(state, startTimer(now))

  t.deepEqual(expected, actual)
})

test('it can stop the timer', async t => {
  const now = Date.now()

  const state = {
    isOn: true,
    startTime: 1497207435325,
    initialization: {
      status: 'success'
    }
  }

  const expected = {
    isOn: false,
    startTime: 1497207435325,
    stopTime: now,
    initialization: {
      status: 'idle'
    }
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

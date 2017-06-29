/**
 * @flow
 */

import test from 'ava'
import reducer from '../reducers/timer'
import { startTimer, stopTimer } from '../actions/timer'

test('timer actions', async t => {
  t.deepEqual(startTimer(), { type: 'START_TIMER', startTime: Date.now() })
  t.deepEqual(stopTimer(), { type: 'STOP_TIMER', stopTime: Date.now() })
})

test('it can start the timer', async t => {
  const state = {
    isOn: false,
    initialization: {
      status: 'success'
    }
  }

  const expected = {
    isOn: true,
    startTime: Date.now(),
    stopTime: null,
    initialization: {}
  }

  const actual = reducer(state, startTimer())

  t.deepEqual(expected, actual)
})

test('it can stop the timer', async t => {
  const state = {
    isOn: true,
    startTime: 1497207435325,
    initialization: {}
  }

  const expected = {
    isOn: false,
    startTime: 1497207435325,
    stopTime: Date.now(),
    initialization: {}
  }

  const actual = reducer(state, stopTimer())

  t.deepEqual(expected, actual)
})

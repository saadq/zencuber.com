import test from 'ava'
import reducer from '../../reducers/timer'

test('it can start the timer', async t => {
  const state = {
    isOn: false
  }

  const expected = {
    isOn: true,
    startTime: Date.now(),
    stopTime: null
  }

  const actual = reducer(state, { type: 'START_TIMER', startTime: Date.now() })

  t.deepEqual(expected, actual)
})

test('it can stop the timer', async t => {
  const state = {
    isOn: true,
    startTime: 1497207435325
  }

  const expected = {
    isOn: false,
    startTime: 1497207435325,
    stopTime: Date.now()
  }

  const actual = reducer(state, { type: 'STOP_TIMER', stopTime: Date.now() })

  t.deepEqual(expected, actual)
})

test('it can reset the timer', async t => {
  const state = {
    isOn: false,
    startTime: 1497207435325,
    stopTime: 1497207492014
  }

  const expected = {
    isOn: false,
    startTime: 0,
    stopTime: 0
  }

  const actual = reducer(state, { type: 'RESET_TIMER' })

  t.deepEqual(expected, actual)
})

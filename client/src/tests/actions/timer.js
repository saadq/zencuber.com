/**
 * @flow
 */

import test from 'ava'
import { startTimer, stopTimer } from '../../actions/timer'

test('timer actions', async t => {
  t.deepEqual(startTimer(), { type: 'START_TIMER', startTime: Date.now() })
  t.deepEqual(stopTimer(), { type: 'STOP_TIMER', stopTime: Date.now() })
})

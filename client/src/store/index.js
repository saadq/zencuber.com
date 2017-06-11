/**
 * @flow
 */

import { createStore } from 'redux'
import middleware from './middleware'
import reducer from '../reducers'
import type { TimerState } from '../reducers/timer'

type State = {
  timer: TimerState
}

const store = createStore(reducer, middleware)

export default store
export type { State }

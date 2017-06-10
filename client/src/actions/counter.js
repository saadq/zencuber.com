/**
 * @flow
 */

import { INCREMENT, DECREMENT } from '../constants/counter'

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }

function increment(): Action {
  return {
    type: INCREMENT
  }
}

function decrement(): Action {
  return {
    type: DECREMENT
  }
}

export { increment, decrement }
export type { Action }

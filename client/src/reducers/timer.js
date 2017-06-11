/**
 * @flow
 */

import { INCREMENT, DECREMENT } from '../constants/counter'
import type { Action } from '../actions/counter'

type State = number

function counter(state: State = 0, action: Action): State {
  switch (action.type) {
    case INCREMENT:
      return state + 1

    case DECREMENT:
      return state - 1

    default:
      return state
  }
}

export default counter

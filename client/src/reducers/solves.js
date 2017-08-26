/**
 * @flow
 */

import type { SolvesState as State, Action } from '../types'

function solves(state: State = [], action: Action): State {
  switch (action.type) {
    case 'ADD_SOLVE':
      return [action.solve, ...state]

    case 'CLEAR_SOLVES':
      return []

    default:
      return state
  }
}

export default solves

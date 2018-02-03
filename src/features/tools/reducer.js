/**
 * @flow
 */

import type { SolvesState as State } from './types'
import type { Action } from '../../app/types'

function tools(state: State = [], action: Action): State {
  switch (action.type) {
    case 'ADD_SOLVE':
      return [action.solve, ...state]

    case 'REMOVE_SOLVE':
      return [
        ...state.slice(0, action.solveId),
        ...state.slice(action.solveId + 1)
      ]

    case 'CLEAR_SOLVES':
      return []

    default:
      return state
  }
}

export default tools

/**
 * @flow
 */

import type { Solve, SolvesAction } from '../types'

function addSolve(solve: Solve): SolvesAction {
  return {
    type: 'ADD_SOLVE',
    solve
  }
}

function removeSolve(solve: Solve): SolvesAction {
  return {
    type: 'REMOVE_SOLVE',
    solve
  }
}

function clearSolves(solve: Solve): SolvesAction {
  return {
    type: 'CLEAR_SOLVES'
  }
}

export {
  addSolve,
  removeSolve,
  clearSolves
}

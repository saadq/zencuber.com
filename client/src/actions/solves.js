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

function removeSolve(solveId: number): SolvesAction {
  return {
    type: 'REMOVE_SOLVE',
    solveId
  }
}

function clearSolves(): SolvesAction {
  return {
    type: 'CLEAR_SOLVES'
  }
}

export {
  addSolve,
  removeSolve,
  clearSolves
}

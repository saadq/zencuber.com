/**
 * @flow
 */

type Solve = {
  time: number,
  formattedTime: string,
  scramble: string
}

type SolvesState = Array<?Solve>

type SolvesAction = {
  type: 'ADD_SOLVE' | 'REMOVE_SOLVE' | 'CLEAR_SOLVES',
  solve?: Solve,
  solveId?: number
}

export type { Solve, SolvesState, SolvesAction }

/**
 * @flow
 */

type Solve = {
  time: string,
  scramble: string
}

type SolvesState = Array<Solve>

type SolvesAction = {
  type: 'ADD_SOLVE' | 'REMOVE_SOLVE' | 'CLEAR_SOLVES'
}

export type { Solve, SolvesState, SolvesAction }

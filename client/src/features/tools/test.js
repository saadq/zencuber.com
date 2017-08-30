/**
 * @flow
 */

import test from 'ava'
import reducer from '../../features/tools/reducer'
import { addSolve, removeSolve, clearSolves } from '../../features/tools/actions'

test('tools actions', async t => {
  const solve = {
    time: 7696,
    formattedTime: '7.696',
    scramble: "L' D2 F2 D2 R U2 F2 L B2 L2 R B F2 U F D2 B2 R F2 D' R2"
  }

  t.deepEqual(addSolve(solve), { type: 'ADD_SOLVE', solve })
  t.deepEqual(removeSolve(2), { type: 'REMOVE_SOLVE', solveId: 2 })
  t.deepEqual(clearSolves(), { type: 'CLEAR_SOLVES' })
})

test('it can add a solve', async t => {
  const newSolve = {
    time: 9591,
    formattedTime: '9.591',
    scramble: "R' U2 R' F2 D2 L F2 L D2 L2 B2 F' L' D R2 F' L' B R2 B U"
  }

  const state = [
    {
      time: 7696,
      formattedTime: '7.696',
      scramble: "L' D2 F2 D2 R U2 F2 L B2 L2 R B F2 U F D2 B2 R F2 D' R2"
    },
    {
      time: 6432,
      formattedTime: '6.432',
      scramble: "R2 B2 L2 D' L2 U F2 D F2 U L2 B' D' U R' B' R F2 R B U"
    }
  ]

  const expected = [
    newSolve,
    {
      time: 7696,
      formattedTime: '7.696',
      scramble: "L' D2 F2 D2 R U2 F2 L B2 L2 R B F2 U F D2 B2 R F2 D' R2"
    },
    {
      time: 6432,
      formattedTime: '6.432',
      scramble: "R2 B2 L2 D' L2 U F2 D F2 U L2 B' D' U R' B' R F2 R B U"
    }
  ]

  const actual = reducer(state, addSolve(newSolve))

  t.deepEqual(expected, actual)
})

test('it can remove a solve', async t => {
  const state = [
    {
      time: 9591,
      formattedTime: '9.591',
      scramble: "R' U2 R' F2 D2 L F2 L D2 L2 B2 F' L' D R2 F' L' B R2 B U"
    },
    {
      time: 7696,
      formattedTime: '7.696',
      scramble: "L' D2 F2 D2 R U2 F2 L B2 L2 R B F2 U F D2 B2 R F2 D' R2"
    },
    {
      time: 6432,
      formattedTime: '6.432',
      scramble: "R2 B2 L2 D' L2 U F2 D F2 U L2 B' D' U R' B' R F2 R B U"
    }
  ]

  const expected = [
    {
      time: 9591,
      formattedTime: '9.591',
      scramble: "R' U2 R' F2 D2 L F2 L D2 L2 B2 F' L' D R2 F' L' B R2 B U"
    },
    {
      time: 6432,
      formattedTime: '6.432',
      scramble: "R2 B2 L2 D' L2 U F2 D F2 U L2 B' D' U R' B' R F2 R B U"
    }
  ]

  const actual = reducer(state, removeSolve(1))

  t.deepEqual(expected, actual)
})

test('it can clear all solves', async t => {
  const state = [
    {
      time: 9591,
      formattedTime: '9.591',
      scramble: "R' U2 R' F2 D2 L F2 L D2 L2 B2 F' L' D R2 F' L' B R2 B U"
    },
    {
      time: 7696,
      formattedTime: '7.696',
      scramble: "L' D2 F2 D2 R U2 F2 L B2 L2 R B F2 U F D2 B2 R F2 D' R2"
    },
    {
      time: 6432,
      formattedTime: '6.432',
      scramble: "R2 B2 L2 D' L2 U F2 D F2 U L2 B' D' U R' B' R F2 R B U"
    }
  ]

  const expected = []
  const actual = reducer(state, clearSolves())

  t.deepEqual(expected, actual)
})

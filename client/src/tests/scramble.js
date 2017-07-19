/**
 * @flow
 */

import test from 'ava'
import reducer from '../reducers/scramble'
import { initializeScramble, updateScramble } from '../actions/scramble'
import type { Scramble } from '../types/scramble'

test('scramble actions', async t => {
  const initAction = initializeScramble()
  t.is(initAction.type, 'INITIALIZE_SCRAMBLE')
  t.true(isValidScramble(initAction.currScramble))
  t.true(isValidScramble(initAction.nextScramble))

  const updateAction = updateScramble()
  t.is(updateAction.type, 'UPDATE_SCRAMBLE')
  t.true(isValidScramble(updateAction.nextScramble))
})

test('it can initialize the scrambles', async t => {
  const prevState = {
    prevScramble: null,
    currScramble: null,
    nextScramble: null
  }

  const newState = reducer(prevState, initializeScramble())
  const { currScramble, nextScramble } = newState

  t.true(isValidScramble(currScramble))
  t.true(isValidScramble(nextScramble))
})

test('it can update the scrambles', async t => {
  const prevState = {
    prevScramble: {
      state: 'LRUBUURFULRLRRFDBDFUBDFFDUBFBRLDRRLFDDULLFBBRFDBLBDLUU',
      scrambleString: "B' L2 B R2 F' R2 U2 F U2 F' R2 U' L U F R' D' R2 B L' R"
    },
    currScramble: {
      state: 'UUUBUFDLBLRRDRRUDFFDDUFBLLLBFFDDRRFLRURBLRDFUBLFBBLDUB',
      scrambleString: "F2 U' L2 B2 U2 B2 U' L2 F2 U F R' U2 F' L' B' R D' B'"
    },
    nextScramble: {
      state: 'BBDFULDFFUBRDRLDDBBRRRFLLRFBULUDFLDRRULBLBFLUFUUFBDDRU',
      scrambleString: "R B2 R' U2 R F2 R2 D2 U2 R' F' L' D2 B' L' D' R U' L"
    }
  }

  const newState = reducer(prevState, updateScramble())

  t.is(newState.prevScramble, prevState.currScramble)
  t.is(newState.currScramble, prevState.nextScramble)
  t.true(isValidScramble(newState.prevScramble))
  t.true(isValidScramble(newState.currScramble))
  t.true(isValidScramble(newState.nextScramble))
})

/**
 * Checks to make sure all characters
 * in the scramble are valid
 */

function isValidScramble(scramble: ?Scramble): boolean {
  if (!scramble) {
    return false
  }

  const { scrambleString } = scramble

  // prettier-ignore
  const scrambleChars = [
    'U', 'U\'', 'U2',
    'D', 'D\'', 'D2',
    'F', 'F\'', 'F2',
    'B', 'B\'', 'B2',
    'L', 'L\'', 'L2',
    'R', 'R\'', 'R2'
  ]

  return scrambleString.split(' ').every(char => scrambleChars.includes(char))
}

/**
 * @flow
 */

import test from 'ava'
import reducer from '../reducers/scramble'
import { initializeScramble, updateScramble } from '../actions'

test('timer actions', async t => {
  const { type: initType, currScramble, nextScramble } = initializeScramble()
  t.is(initType, 'INITIALIZE_SCRAMBLE')
  t.is(typeof currScramble, 'string')
  t.is(typeof nextScramble, 'string')
  t.true(isValidScramble(currScramble))
  t.true(isValidScramble(nextScramble))

  const { type: updateType, newScramble } = updateScramble()
  t.is(updateType, 'UPDATE_SCRAMBLE')
  t.is(typeof newScramble, 'string')
  t.true(isValidScramble(newScramble))
})

test('it can initialize the scrambles', async t => {
  const prevState = {
    prevScramble: null,
    currScramble: null,
    nextScramble: null
  }

  const newState = reducer(prevState, initializeScramble())
  const { currScramble, nextScramble } = newState

  t.is(typeof currScramble, 'string')
  t.is(typeof nextScramble, 'string')
  t.true(isValidScramble(currScramble))
  t.true(isValidScramble(nextScramble))
})

test('it can update the scrambles', async t => {
  const prevState = {
    prevScramble: "B L B U2 F2 L' B D' L2 D R' U2 R D B2 L2 U' R2 B L",
    currScramble: "B2 L D2 F' R D B U2 B2 D' L' B' D R' D R2 F2 D F D'",
    nextScramble: "B D2 L' D2 B2 U F U' R2 B2 U F' R D L U' F D2 B2 U2"
  }

  const newState = reducer(prevState, updateScramble())

  t.is(newState.prevScramble, prevState.currScramble)
  t.is(newState.currScramble, prevState.nextScramble)
  t.is(typeof newState.nextScramble, 'string')
  t.true(isValidScramble(newState.prevScramble))
  t.true(isValidScramble(newState.currScramble))
  t.true(isValidScramble(newState.nextScramble))
})

/**
 * Checks to make sure all characters
 * in the scramble are valid
 */

function isValidScramble(scramble: ?string): boolean {
  if (!scramble) {
    return false
  }

  // prettier-ignore
  const scrambleChars = [
    'U', 'U\'', 'U2',
    'D', 'D\'', 'D2',
    'F', 'F\'', 'F2',
    'B', 'B\'', 'B2',
    'L', 'L\'', 'L2',
    'R', 'R\'', 'R2'
  ]

  return scramble.split(' ').every(char => scrambleChars.includes(char))
}

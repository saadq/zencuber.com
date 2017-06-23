/**
 * @flow
 */

type ScrambleState = {
  prevScramble: ?string,
  currScramble: ?string,
  nextScramble: ?string
}

type ScrambleAction = {
  type: 'INITIALIZE_SCRAMBLE' | 'UPDATE_SCRAMBLE',
  currScramble?: string,
  nextScramble?: string,
  newScramble?: string
}

export type { ScrambleState, ScrambleAction }

/**
 * @flow
 */

type Scramble = {
  state: string,
  scrambleString: string
}

type ScrambleState = {
  prevScramble: ?Scramble,
  currScramble: ?Scramble,
  nextScramble: ?Scramble
}

type ScrambleAction = {
  type: 'INITIALIZE_SCRAMBLE' | 'UPDATE_SCRAMBLE',
  currScramble?: Scramble,
  nextScramble?: Scramble
}

export type { Scramble, ScrambleState, ScrambleAction }

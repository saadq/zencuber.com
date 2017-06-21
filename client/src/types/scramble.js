/**
 * @flow
 */

type ScrambleState = {
  prevScramble: ?string,
  currScramble: ?string,
  nextScramble: ?string
}

type ScrambleAction =
  | { type: 'INITIALIZE_SCRAMBLE', currScramble: string, nextScramble: string }
  | { type: 'UPDATE_SCRAMBLE', newScramble: string }

export type {
  ScrambleState,
  ScrambleAction
}

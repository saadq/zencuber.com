/**
 * @flow
 */

type Action =
 | { type: 'START_TIMER', startTime: number }
 | { type: 'STOP_TIMER', stopTime: number }
 | { type: 'RESET_TIMER' }

export type { Action }

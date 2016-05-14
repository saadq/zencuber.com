import { CHANGE_MODE } from '../constants'

export function changeMode (mode) {
  return {
    type: CHANGE_MODE,
    mode
  }
}

import { CHANGE_MODE, CHANGE_INSPECTION } from '../constants'

export function changeMode() {
  return {
    type: CHANGE_MODE
  }
}

export function changeInspection() {
  return {
    type: CHANGE_INSPECTION
  }
}

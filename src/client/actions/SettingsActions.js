import { CHANGE_MODE, CHANGE_INSPECTION } from '../constants'

export function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    mode
  }
}

export function changeInspection(inspectionTime) {
  return {
    type: CHANGE_INSPECTION,
    inspectionTime
  }
}

/**
 * @flow
 */

import { combineReducers } from 'redux'
import timer from '../features/timer/reducer'
import scramble from '../features/scramble/reducer'
import solves from '../features/tools/reducer'

const reducer = combineReducers({
  timer,
  scramble,
  solves
})

export default reducer

/**
 * @flow
 */

import { combineReducers } from 'redux'
import timer from './timer'
import scramble from './scramble'
import solves from './solves'

const reducer = combineReducers({
  timer,
  scramble,
  solves
})

export default reducer

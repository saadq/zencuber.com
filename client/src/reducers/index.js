/**
 * @flow
 */

import { combineReducers } from 'redux'
import timer from './timer'
import scramble from './scramble'

const reducer = combineReducers({
  timer,
  scramble
})

export default reducer

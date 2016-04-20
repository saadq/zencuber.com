import { combineReducers } from 'redux'
import timer from './timer'
import times from './times'
import mode from './mode'

const rootReducer = combineReducers({ timer, times, mode })

export default rootReducer

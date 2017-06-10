/**
 * @flow
 */

import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'

const middleware = [thunk]

export default composeWithDevTools(applyMiddleware(...middleware))

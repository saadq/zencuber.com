/**
 * @flow
 */

import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
}

export default composeWithDevTools(applyMiddleware(...middleware))

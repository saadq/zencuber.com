/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'

function App({ count, increment, decrement }) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

function mapStateToProps(state: number) {
  return {
    count: state
  }
}

function mapDispatchToProps(dispatch: Function) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

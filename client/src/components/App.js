/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import { startTimer, stopTimer, resetTimer } from '../actions/timer'
import type { State } from '../store'

function App({ startTimer, stopTimer, resetTimer }) {
  return (
    <div>
      <h1>00 : 00 . 00</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

function mapStateToProps(state: State) {
  return {
    startTime: state.timer.startTime,
    stopTime: state.timer.stopTime
  }
}

function mapDispatchToProps(dispatch: Function) {
  return {
    startTimer: () => dispatch(startTimer()),
    stopTimer: () => dispatch(stopTimer()),
    resetTimer: () => dispatch(resetTimer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

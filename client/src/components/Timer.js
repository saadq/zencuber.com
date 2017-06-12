/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startTimer, stopTimer, resetTimer } from '../actions/timer'
import type { State } from '../store'

type Props = {
  startTimer: Function,
  stopTimer: Function,
  resetTimer: Function,
  startTime?: number,
  stopTime?: number
}

class Timer extends Component {
  props: Props
  interval: number

  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), 1)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getElapsedTime() {
    const { startTime, stopTime } = this.props

    return startTime ? (stopTime || Date.now()) - startTime : 0
  }

  render() {
    const { startTimer, stopTimer, resetTimer } = this.props

    return (
      <div>
        <h1>{this.getElapsedTime()}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Timer)

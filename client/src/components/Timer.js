/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startTimer, stopTimer } from '../actions/timer'
import type { State } from '../store'
import styles from '../styles/timer.styl'

type Props = {
  isOn: boolean,
  startTime?: number,
  stopTime?: number,
  startTimer: Function,
  stopTimer: Function,
  resetTimer: Function
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

  start = () => {
    const { isOn, startTimer } = this.props

    if (isOn) {
      return
    }

    startTimer()
  }

  stop = () => {
    const { isOn, stopTimer } = this.props

    if (!isOn) {
      return
    }

    stopTimer()
  }

  getElapsedTime(): number {
    const { startTime, stopTime } = this.props

    return startTime ? (stopTime || Date.now()) - startTime : 0
  }

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.timer}>{this.getElapsedTime()}</h1>
        <button className={styles.button} onClick={this.start}>Start</button>
        <button className={styles.button} onClick={this.stop}>Stop</button>
      </div>
    )
  }
}

function mapStateToProps(state: State) {
  return {
    isOn: state.timer.isOn,
    startTime: state.timer.startTime,
    stopTime: state.timer.stopTime
  }
}

function mapDispatchToProps(dispatch: Function) {
  return {
    startTimer: () => dispatch(startTimer()),
    stopTimer: () => dispatch(stopTimer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)

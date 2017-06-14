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
    window.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    window.removeListener('keydown', this.onKeyDown)
  }

  onKeyDown = (e: SyntheticKeyboardEvent) => {}

  timeFormatter(elapsed: number) {
    const time = new Date(elapsed)
    const minutes = time.getMinutes().toString().padStart(2, '0')
    const seconds = time.getSeconds().toString().padStart(2, '0')
    const milliseconds = time.getMilliseconds().toString().padStart(3, '0')

    return `${minutes} : ${seconds} . ${milliseconds}`
  }

  start = () => {
    const { isOn, startTimer } = this.props

    if (isOn) {
      return
    }

    startTimer()
    this.interval = setInterval(() => this.forceUpdate(), 10)
  }

  stop = () => {
    const { isOn, stopTimer } = this.props

    if (!isOn) {
      return
    }

    stopTimer()
    clearInterval(this.interval)
  }

  getElapsedTime(): string {
    const { startTime, stopTime } = this.props
    const elapsed = startTime ? (stopTime || Date.now()) - startTime : 0

    return this.timeFormatter(elapsed)
  }

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.timer}>{this.getElapsedTime()}</h1>
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    startTimer: () => dispatch(startTimer()),
    stopTimer: () => dispatch(stopTimer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)

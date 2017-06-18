/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startTimer, stopTimer } from '../../actions/timer'
import type { State, Dispatch } from '../../types'
import styles from './timer.styl'

type Props = {
  isOn: boolean,
  startTime?: number,
  stopTime?: number,
  startTimer: Function,
  stopTimer: Function
}

class Timer extends Component {
  props: Props
  interval: *
  justStopped: *

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
    window.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp)
    window.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyUp = (e: SyntheticKeyboardEvent) => {
    if (this.justStopped) {
      this.justStopped = false
      return
    }

    if (e.keyCode === 32) {
      this.props.isOn ? this.stop() : this.start()
    }
  }

  onKeyDown = (e: SyntheticKeyboardEvent) => {
    if (this.props.isOn) {
      this.stop()
      this.justStopped = true
    }
  }

  start = () => {
    const { isOn, startTimer } = this.props

    if (isOn) return

    startTimer()
    this.interval = setInterval(() => this.forceUpdate(), 10)
  }

  stop = () => {
    const { isOn, stopTimer } = this.props

    if (!isOn) return

    stopTimer()
    clearInterval(this.interval)
  }

  timeFormatter(elapsed: number) {
    const time = new Date(elapsed)
    const seconds = time.getSeconds().toString()
    const milliseconds = time.getMilliseconds().toString().padStart(3, '0')

    return this.props.isOn
      ? `${seconds}`
      : `${seconds}.${milliseconds.slice(0, 2)}`
  }

  getElapsedTime(): string {
    const { startTime, stopTime } = this.props
    const elapsed = startTime ? (stopTime || Date.now()) - startTime : 0

    return this.timeFormatter(elapsed)
  }

  render() {
    return (
      <h1 className={styles.timer}>
        {this.getElapsedTime()}
      </h1>
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

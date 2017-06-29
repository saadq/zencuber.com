/**
 * @flow
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TimerActions, ScrambleActions } from '../../actions'
import type { State } from '../../types'
import styles from './timer.styl'

type Props = {
  isOn: boolean,
  initialization: {
    status: string,
    shouldCancel?: boolean
  },
  startTime?: number,
  stopTime?: number,
  actions: {
    startTimer: () => any,
    stopTimer: () => any,
    initializeTimer: () => any,
    cancelInitializeTimer: () => any,
    updateScramble: () => any
  }
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
    const { initialization, actions } = this.props
    const { status, shouldCancel } = initialization

    if (this.justStopped) {
      this.justStopped = false
      return
    }

    if (e.keyCode !== 32) return

    if (status === 'pending' && !shouldCancel) actions.cancelInitializeTimer()
    else if (status === 'success') this.start()
  }

  onKeyDown = (e: SyntheticKeyboardEvent) => {
    const { isOn, initialization, actions } = this.props
    const { status } = initialization

    if (isOn) {
      this.stop()
      this.justStopped = true
    } else if (e.keyCode === 32) {
      if (status === 'pending' || status === 'success') return
      actions.initializeTimer()
    }
  }

  start = () => {
    const { isOn, actions } = this.props

    if (isOn) return

    actions.startTimer()
    this.interval = setInterval(() => this.forceUpdate(), 10)
  }

  stop = () => {
    const { isOn, actions } = this.props

    if (!isOn) return

    actions.stopTimer()
    actions.updateScramble()
    clearInterval(this.interval)
  }

  timeFormatter(elapsed: number) {
    const time = new Date(elapsed)
    const seconds = time.getSeconds().toString()
    const milliseconds = time.getMilliseconds().toString().padStart(3, '0')

    return this.props.isOn
      ? `${seconds}.${milliseconds[0]}`
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
    stopTime: state.timer.stopTime,
    initialization: state.timer.initialization
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(
      { ...TimerActions, ...ScrambleActions },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)

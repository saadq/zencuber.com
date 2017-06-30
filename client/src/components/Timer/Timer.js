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
  status: 'uninitialized' | 'initializing' | 'ready' | 'running',
  startTime?: number,
  stopTime?: number,
  actions: {
    startTimer: (startTime: number) => any,
    stopTimer: (stopTime: number) => any,
    initializeTimer: () => any,
    cancelTimerInitialization: () => any,
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

  onKeyDown = (e: SyntheticKeyboardEvent) => {
    const { status, actions } = this.props
    if (status === 'running') {
      this.stop()
      this.justStopped = true
    } else if (e.keyCode === 32 && this.needsToInitialize()) {
      actions.initializeTimer()
    }
  }

  onKeyUp = (e: SyntheticKeyboardEvent) => {
    const { status, actions } = this.props

    if (this.justStopped) {
      this.justStopped = false
      return
    }

    if (e.keyCode !== 32) {
      return
    }

    if (status === 'initializing') {
      actions.cancelTimerInitialization()
    } else if (status === 'ready') {
      this.start()
    }
  }

  needsToInitialize() {
    const { status } = this.props
    return !this.justStopped && status !== 'initializing' && status !== 'ready'
  }

  start = () => {
    const { status, actions } = this.props

    if (status === 'running') {
      return
    }

    actions.startTimer(Date.now())
    this.interval = setInterval(() => this.forceUpdate(), 10)
  }

  stop = () => {
    const { status, actions } = this.props

    if (status === 'uninitialized') {
      return
    }

    actions.stopTimer(Date.now())
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
    const { status } = this.props
    return (
      <h1 className={styles[`timer-${status}`]}>
        {this.getElapsedTime()}
      </h1>
    )
  }
}

function mapStateToProps(state: State) {
  return {
    startTime: state.timer.startTime,
    stopTime: state.timer.stopTime,
    status: state.timer.status
  }
}

const actionCreators = {
  ...TimerActions,
  ...ScrambleActions
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)

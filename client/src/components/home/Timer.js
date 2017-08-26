/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { TimerActions, ScrambleActions } from '../../actions'
import type { State } from '../../types'
import { primary } from '../helpers/colors'

const H1 = styled.h1`
  font-size: 7em;
  height: 27vh;
  line-height: 27vh;
  color: ${props => {
    switch (props.status) {
      case 'initializing': return 'red'
      case 'ready': return 'lime'
      case 'running': return 'white'
      default: return primary
    }
  }}
`

type Props = {
  status: 'paused' | 'uninitialized' | 'initializing' | 'ready' | 'running',
  startTime?: number,
  stopTime?: number,
  startTimer: (startTime: number) => mixed,
  stopTimer: (stopTime: number) => mixed,
  initializeTimer: () => mixed,
  cancelTimerInitialization: () => mixed,
  unpauseTimer: () => mixed,
  updateScramble: () => mixed
}

class Timer extends Component {
  props: Props
  interval: *

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
    window.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp)
    window.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown = (e: SyntheticKeyboardEvent) => {
    const { status, initializeTimer, updateScramble } = this.props
    if (status === 'running') {
      this.stop()
      updateScramble()
    } else if (e.keyCode === 32 && status === 'uninitialized') {
      initializeTimer()
    }
  }

  onKeyUp = (e: SyntheticKeyboardEvent) => {
    const { status, unpauseTimer, cancelTimerInitialization } = this.props

    if (status === 'paused') {
      unpauseTimer()
      return
    }

    if (e.keyCode !== 32) {
      return
    }

    if (status === 'initializing') {
      cancelTimerInitialization()
    } else if (status === 'ready') {
      this.start()
    }
  }

  start = () => {
    const { status, startTimer } = this.props

    if (status === 'running') {
      return
    }

    startTimer(Date.now())
    this.interval = setInterval(() => this.forceUpdate(), 10)
  }

  stop = () => {
    const { status, stopTimer } = this.props

    if (status === 'uninitialized') {
      return
    }

    stopTimer(Date.now())
    clearInterval(this.interval)
  }

  timeFormatter(elapsed: number): string {
    const time = new Date(elapsed)
    const seconds = time.getSeconds().toString()
    const milliseconds = time.getMilliseconds().toString().padStart(3, '0')

    return this.props.status === 'running'
      ? `${seconds}.${milliseconds[0]}`
      : `${seconds}.${milliseconds.slice(0, 2)}`
  }

  getElapsedTime(): number {
    const { startTime, stopTime } = this.props
    const elapsed = startTime ? (stopTime || Date.now()) - startTime : 0

    return elapsed
  }

  render() {
    const { status } = this.props
    const elapsed = this.getElapsedTime()
    const time = this.timeFormatter(elapsed)

    return (
      <H1 status={status}>{time}</H1>
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

const mapDispatchToProps = {
  ...TimerActions,
  ...ScrambleActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)

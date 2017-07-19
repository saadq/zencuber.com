/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TimerActions, ScrambleActions } from '../../actions'
import type { State } from '../../types'
import styles from './timer.styl'

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

  /**
   * Sets up the keyboard listeners for the timer.
   */

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
    window.addEventListener('keydown', this.onKeyDown)
  }

  /**
   * Remove the keypress listeners when the component unmounts.
   */

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp)
    window.removeEventListener('keydown', this.onKeyDown)
  }

  /**
   * Runs anytime a key is pressed.
   *
   * If the timer is already running, it stops.
   * If the timer isn't running and it isn't "paused", it starts initialization.
   *
   * Initialization takes 350ms to complete.
   *
   * @param e The event object.
   */

  onKeyDown = (e: SyntheticKeyboardEvent) => {
    const { status, initializeTimer } = this.props
    if (status === 'running') {
      this.stop()
    } else if (e.keyCode === 32 && status === 'uninitialized') {
      initializeTimer()
    }
  }

  /**
   * Runs anytime a key is released.
   *
   * If the timer was paused, unpause it.
   * If the timer hasn't finished initializing, cancel initialization.
   * If the timer is fully initialized, start the timer.
   *
   * @param e The event object.
   */

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

  /**
   * Starts the timer.
   *
   * forceUpdate() is needed to constantly rerender the timer because the
   * state isn't changing as time passes, so we need to tell it to manually
   * calculate how much time has passed and rerender it with that.
   */

  start = () => {
    const { status, startTimer } = this.props

    if (status === 'running') {
      return
    }

    startTimer(Date.now())
    this.interval = setInterval(() => this.forceUpdate(), 10)
  }

  /**
   * Stops the timer and generates a new scramble.
   *
   * The timer is set to a "paused" state immediately after the timer stops.
   * This is to make sure that the timer doesn't immediately start again once
   * the key that you used to stop it is released.
   *
   * Instead of restarting the timer, releasing the key will just unpause it,
   * and it can be used normally again.
   */

  stop = () => {
    const { status, stopTimer, updateScramble } = this.props

    if (status === 'uninitialized') {
      return
    }

    stopTimer(Date.now())
    updateScramble()
    clearInterval(this.interval)
  }

  /**
   * Formats the elapsed amount of time to a nice-looking string.
   *
   * If the timer is running, the format is like this: "32.7".
   * If the timer isn't running, the format is like this: "32.70".
   *
   * @param elapsed The amount of time that has passed in milliseconds.
   *
   * @return The amount of time that has passed.
   */

  timeFormatter(elapsed: number): string {
    const time = new Date(elapsed)
    const seconds = time.getSeconds().toString()
    const milliseconds = time.getMilliseconds().toString().padStart(3, '0')

    return this.props.status === 'running'
      ? `${seconds}.${milliseconds[0]}`
      : `${seconds}.${milliseconds.slice(0, 2)}`
  }

  /**
   * Calculates how much time has passed since the timer has started.
   * If the timer isn't running, just return 0.
   *
   * @return The elapsed time.
   */

  getElapsedTime(): number {
    const { startTime, stopTime } = this.props
    const elapsed = startTime ? (stopTime || Date.now()) - startTime : 0

    return elapsed
  }

  /**
   * Display the formatted time.
   */

  render() {
    const { status } = this.props
    const elapsed = this.getElapsedTime()
    const time = this.timeFormatter(elapsed)

    return (
      <h1 className={styles[`timer-${status}`]}>
        {time}
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

const mapDispatchToProps = {
  ...TimerActions,
  ...ScrambleActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)

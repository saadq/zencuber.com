import React from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { startTimer, stopTimer, resetTimer } from '../actions'
import { timeFormatter, getElapsedTime } from '../../util'

class Timer extends React.Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1)

    const button = findDOMNode(this.refs.btn)
    let justStopped = false

    // Start timer as soon as space bar is released
    window.addEventListener('keyup', (event) => {
      event.preventDefault()
      if (event.which === 32 && !this.props.isOn) {
        if (justStopped) {
          justStopped = false
          return
        }
        button.click()
      }
    })

    // Stop timer as soon as spacebar is pressed
    window.addEventListener('keydown', (event) => {
      event.preventDefault()
      if (event.which === 32 && this.props.isOn) {
        justStopped = true
        button.click()
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  click() {
    const { isOn, time, startedAt, stoppedAt } = this.props
    const elapsed = getElapsedTime(time, startedAt, stoppedAt)

    isOn
      ? this.props.stopTimer()
      : this.props.startTimer(elapsed)
  }

  render() {
    const { isOn, time, startedAt, stoppedAt } = this.props
    const elapsed = getElapsedTime(time, startedAt, stoppedAt)
    const btnClasses = 'btn-large waves-effect waves-light'
    return (
      <div>
        <h1 id="timer">{timeFormatter(elapsed)}</h1>
        <button ref="btn" onClick={this.click.bind(this)} id="timer-button" className={btnClasses}>
          {isOn ? 'Stop' : 'Start'}
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { isOn, time, startedAt, stoppedAt } = state
  return { isOn, time, startedAt, stoppedAt }
}

export default connect(mapStateToProps, {
  startTimer, stopTimer, resetTimer
})(Timer)

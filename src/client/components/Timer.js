import React from 'react'
import { connect } from 'react-redux'
import { startTimer, stopTimer, resetTimer } from '../actions'
import { timeFormatter, getElapsedTime } from '../../util'

class Timer extends React.Component {
  componentDidMount() {
    setInterval(this.forceUpdate.bind(this), 1)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  click() {
    const { isOn, time, startedAt, stoppedAt } = this.props
    const elapsed = getElapsedTime(time, startedAt, stoppedAt)

    if (!isOn) {
      this.props.startTimer(elapsed)
    } else {
      this.props.stopTimer()
    }
  }

  render() {
    const { isOn, time, startedAt, stoppedAt } = this.props
    const elapsed = getElapsedTime(time, startedAt, stoppedAt)
    const btnClasses = 'btn-large waves-effect waves-light'

    return (
      <div>
        <h1 id="timer">{timeFormatter(elapsed)}</h1>
        <button ref="timerButton" onClick={this.click.bind(this)} id="timer-button" className={btnClasses}>
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

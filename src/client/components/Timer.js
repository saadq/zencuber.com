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

  render() {
    const { baseTime, startedAt, stoppedAt } = this.props
    const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt)
    const btnClasses = 'btn-large waves-effect waves-light'

    return (
      <div>
        <h1 id="timer">{timeFormatter(elapsed)}</h1>
        <button ref="timerButton" onClick={() => this.props.startTimer(elapsed)} id="timer-button" className={btnClasses}>
          Start
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  baseTime: state.baseTime,
  startedAt: state.startedAt,
  stoppedAt: state.stoppedAt
})

export default connect(mapStateToProps, {
  startTimer, stopTimer, resetTimer
})(Timer)


import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TimerActions from '../actions'
import { timeFormatter, getElapsedTime } from '../../util'

class Timer extends React.Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1)

    const button = findDOMNode(this.refs.btn)
    let { isOn } = this.props
    let justStopped = false

    window.addEventListener('keyup', (event) => {
      event.preventDefault()
      if (event.which === 32 && !isOn) {
        if (justStopped) {
          justStopped = false
          return
        }
        button.click()
      }
    })

    window.addEventListener('keydown', (event) => {
      if (event.which === 32) {
        event.preventDefault()
        if (isOn) {
          justStopped = true
          button.click()
        }
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  click() {
    const { isOn, time, startedAt, stoppedAt, actions } = this.props
    const elapsed = getElapsedTime(time, startedAt, stoppedAt)

    isOn
      ? actions.stopTimer()
      : actions.startTimer(elapsed)
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

Timer.propTypes = {
  actions: PropTypes.object.isRequired,
  isOn: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  startedAt: PropTypes.number,
  stoppedAt: PropTypes.number
}

const mapStateToProps = (state) => ({
  isOn: state.isOn,
  time: state.time,
  startedAt: state.startedAt,
  stoppedAt: state.stoppedAt
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TimerActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)

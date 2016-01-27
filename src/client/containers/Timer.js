import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ElapsedTime from '../components/ElapsedTime'
import TimerButton from '../components/TimerButton'
import * as TimerActions from '../actions'
import { getElapsedTime } from '../../util'

class Timer extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), 1)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  click() {
    const { isOn, actions } = this.props
    const { startTimer, stopTimer } = actions

    isOn ? stopTimer() : startTimer()
  }

  render() {
    const { isOn, time, startedAt, stoppedAt } = this.props
    const elapsed = getElapsedTime(time, startedAt, stoppedAt)

    return (
      <div>
        <ElapsedTime elapsed={elapsed} />
        <TimerButton isOn={isOn} click={this.click.bind(this)} />
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

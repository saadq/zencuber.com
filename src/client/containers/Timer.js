import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Stopwatch from '../components/Stopwatch'
import * as TimerActions from '../actions'
import { getElapsedTime } from '../../util'

class Timer extends Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1)
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

    return (
      <Stopwatch click={this.click.bind(this)} elapsed={elapsed} isOn={isOn} />
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

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

  start() {
    const { actions } = this.props

    actions.startTimer()
  }

  stop() {
    const { actions, startedAt, stoppedAt } = this.props
    const time = getElapsedTime(startedAt, stoppedAt)

    actions.stopTimer()
    actions.addTime(time)
  }

  click() {
    const { isOn } = this.props

    isOn ? this.stop() : this.start()
  }

  render() {
    const { isOn, startedAt, stoppedAt } = this.props
    const time = getElapsedTime(startedAt, stoppedAt)

    return (
      <div>
        <ElapsedTime elapsed={time} />
        <TimerButton isOn={isOn} click={() => this.click()} />
      </div>
    )
  }
}

Timer.propTypes = {
  actions: PropTypes.object.isRequired,
  isOn: PropTypes.bool.isRequired,
  startedAt: PropTypes.number,
  stoppedAt: PropTypes.number
}

const mapStateToProps = (state) => ({
  isOn: state.isOn,
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

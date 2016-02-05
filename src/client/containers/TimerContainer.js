import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TimeDisplay from '../components/TimeDisplay'
import TimerButton from '../components/TimerButton'
import Breakpoints from '../components/Breakpoints'
import * as TimerActions from '../actions'
import { getElapsedTime } from '../../util'

class TimerContainer extends Component {
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
    const { isOn, mode, startedAt, stoppedAt } = this.props
    const time = getElapsedTime(startedAt, stoppedAt)

    return (
      <div>
        <TimeDisplay elapsed={time} />
        <TimerButton isOn={isOn} click={() => this.click()} />
        { mode !== 'normal' ? <Breakpoints mode={mode} /> : null }
      </div>
    )
  }
}

TimerContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isOn: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  startedAt: PropTypes.number,
  stoppedAt: PropTypes.number
}

const mapStateToProps = (state) => ({
  isOn: state.isOn,
  mode: state.mode,
  startedAt: state.startedAt,
  stoppedAt: state.stoppedAt
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TimerActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerContainer)

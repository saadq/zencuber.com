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
    const { actions, isOn, breakpoints, breakpointsOn, step } = this.props
    const finalStep = 3

    console.log(`Step: ${step}`)

    if (!isOn) {
      this.start()
    } else if (breakpointsOn && step !== finalStep) {
      actions.startBreakpoint(step)
    } else {
      this.stop()
    }
  }

  render() {
    const { actions, isOn, mode, breakpoints, step, startedAt, stoppedAt } = this.props
    const time = getElapsedTime(startedAt, stoppedAt)

    return (
      <div>
        <TimeDisplay elapsed={time} />
        <TimerButton step={step} isOn={isOn} click={() => this.click()} />
        { mode !== 'normal' ?
          <Breakpoints start={actions.startBreakpoint} times={breakpoints} mode={mode} />
          : null }
      </div>
    )
  }
}

TimerContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isOn: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  breakpoints: PropTypes.array,
  breakpointsOn: PropTypes.bool,
  step: PropTypes.number,
  startedAt: PropTypes.number,
  stoppedAt: PropTypes.number
}

const mapStateToProps = (state) => ({
  isOn: state.isOn,
  mode: state.mode,
  breakpointsOn: state.breakpointsOn,
  breakpoints: state.breakpoints,
  step: state.step,
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

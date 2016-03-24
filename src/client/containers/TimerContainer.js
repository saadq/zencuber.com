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
    const { actions, isOn, breakpoints, breakpointsOn, currStep } = this.props
    const finalStep = 3

    if (!isOn) {
      this.start()
    } else if (breakpointsOn && currStep !== finalStep) {
      actions.startBreakpoint(currStep)
    } else {
      this.stop()
    }
  }

  render() {
    const { actions, isOn, mode, breakpoints, startedAt, stoppedAt } = this.props
    const time = getElapsedTime(startedAt, stoppedAt)

    return (
      <div>
        <TimeDisplay elapsed={time} />
        <TimerButton isOn={isOn} click={() => this.click()} />
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
  currStep: PropTypes.number,
  startedAt: PropTypes.number,
  stoppedAt: PropTypes.number
}

const mapStateToProps = (state) => ({
  isOn: state.isOn,
  mode: state.mode,
  breakpointsOn: state.breakpointsOn,
  breakpoints: state.breakpoints,
  currStep: state.currStep,
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

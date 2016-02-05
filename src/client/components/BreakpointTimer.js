import React, { Component } from 'react'
import { getElapsedTime, timeFormatter } from '../../util'

class BreakpointTimer extends Component {
  render() {
    const { times, timeId } = this.props
    const { startedAt, stoppedAt } = times[timeId]
    const elapsed = getElapsedTime(startedAt, stoppedAt)
    const time = timeFormatter(elapsed)

    return (
      <span key={this.props.timeId}>{time}</span>
    )
  }
}

export default BreakpointTimer

import React, { Component } from 'react'
import { getElapsedTime, timeFormatter } from '../../util'

class BreakpointTimer extends Component {
  render() {
    const { times, timeId } = this.props
    let display

    if (times) {
      const { startedAt, stoppedAt } = times[timeId]
      const elapsed = getElapsedTime(startedAt, stoppedAt)
      display = timeFormatter(elapsed)
    } else {
      display = '00 : 00 . 00'
    }

    return (
      <span key={this.props.timeId}>{display}</span>
    )
  }
}

export default BreakpointTimer

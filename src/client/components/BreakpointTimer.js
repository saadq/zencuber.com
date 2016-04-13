import React from 'react'
import { getBreakpointDisplay } from '../../util'

const BreakpointTimer = ({ times, timeId }) => (
  <span key={timeId}>{getBreakpointDisplay(times, timeId)}</span>
)

export default BreakpointTimer

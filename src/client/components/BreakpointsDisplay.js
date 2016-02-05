import React, { PropTypes } from 'react'
import BreakpointTimer from './BreakpointTimer'

const classes = 'breakpoint col s6 m3'

const BreakpointsDisplay = ({ steps, times }) => (
  <div>
    {steps.map((step, i) =>
      <p key={i} className={classes}>
        {step}
        <br />
        <BreakpointTimer times={times} timeId={i} />
      </p>
    )}
  </div>
)

BreakpointsDisplay.propTypes = {
  steps: PropTypes.array.isRequired,
  times: PropTypes.array.isRequired
}

export default BreakpointsDisplay

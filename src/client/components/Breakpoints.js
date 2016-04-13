import React, { PropTypes } from 'react'
import BreakpointTimer from './BreakpointTimer'
import { getSteps } from '../../util'

const classes = 'breakpoint col s6 m3'

const Breakpoints = ({ mode, times }) => (
  <div>
    {getSteps(mode).map((step, i) =>
      <p key={i} className={classes}>
        {step}
        <br />
        <BreakpointTimer times={times} timeId={i} />
      </p>
    )}
  </div>
)

Breakpoints.propTypes = {
  mode: PropTypes.string.isRequired,
  times: PropTypes.array
}

export default Breakpoints

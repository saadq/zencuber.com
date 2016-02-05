import React, { PropTypes } from 'react'

const BreakpointsDisplay = ({ steps }) => (
  <div>
    {steps.map((step, i) =>
      <p key={i} className="breakpoint col s6 m3">
        {step} <br />
        00 : 00 . 00
      </p>
    )}
  </div>
)

BreakpointsDisplay.propTypes = {
  steps: PropTypes.array.isRequired
}

export default BreakpointsDisplay

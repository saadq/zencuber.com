import React, { PropTypes } from 'react'
import { timeFormatter } from '../../util'

const TimeDisplay = ({ elapsed }) => (
  <h1 id='timer'>{timeFormatter(elapsed)}</h1>
)

TimeDisplay.propTypes = {
  elapsed: PropTypes.number.isRequired
}

export default TimeDisplay

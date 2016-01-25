import React, { PropTypes } from 'react'
import { timeFormatter } from '../../util'

const ElapsedTime = ({ elapsed }) => (
  <h1 id="timer">{timeFormatter(elapsed)}</h1>
)

ElapsedTime.propTypes = {
  elapsed: PropTypes.number.isRequired
}

export default ElapsedTime

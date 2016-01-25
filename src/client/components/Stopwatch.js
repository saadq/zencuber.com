import React, { PropTypes } from 'react'
import ElapsedTime from './ElapsedTime'
import TimerButton from './TimerButton'

const Stopwatch = ({ isOn, elapsed, click }) => (
  <div>
    <ElapsedTime elapsed={elapsed} />
    <TimerButton isOn={isOn} click={click} />
  </div>
)

Stopwatch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  elapsed: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired
}

export default Stopwatch

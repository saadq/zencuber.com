import React, { PropTypes } from 'react'
import { timeFormatter } from '../../util'

const buttonClasses = 'btn-large waves-effect waves-light'
const iconClasses = 'material-icons right'

const RecentTimes = ({ times, removeTime, clearTimes }) => (
  <div>
    <ul id="times">
      <h3>Recent Times</h3>
      <hr />
      {times.map((time, i) =>
        <li key={i}>{timeFormatter(time)}
        <i onClick={() => removeTime(i)} className={iconClasses}>close</i></li>
      )}
    </ul>
    <button id="clear" className={buttonClasses} onClick={clearTimes}>Clear</button>
  </div>
)

RecentTimes.propTypes = {
  times: PropTypes.array.isRequired,
  removeTime: PropTypes.func.isRequired,
  clearTimes: PropTypes.func.isRequired
}

export default RecentTimes

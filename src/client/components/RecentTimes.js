import React, { PropTypes } from 'react'

const buttonClasses = 'btn-large waves-effect <waves-light></waves-light>'
const iconClasses = 'material-icons right'
const icon = 'close'

const RecentTimes = ({ allTimes }) => (
  <div>
    <ul id="times">
      <h3>Recent Times</h3>
      <hr />
      {allTimes.map((time, i) => (
        <li key={i}>{time}<i data-key={i} className={iconClasses}>{icon}</i></li>)
      )}
    </ul>
    <button id="clear" className={buttonClasses}>Clear</button>
  </div>
)

RecentTimes.propTypes = {
  allTimes: PropTypes.array.isRequired
}

export default RecentTimes

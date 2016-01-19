import React from 'react'
import { connect } from 'react-redux'

const RecentTimes = ({ allTimes }) => (
  <div>
    <ul id="times">
      <h3>Recent Times</h3>
      <hr />
      {allTimes.map((time, i) => <li key={i}>{time}</li>)}
    </ul>
    <button id="clear" className="btn-large waves-effect waves-light">Clear</button>
  </div>
)

const mapStateToProps = (state) => ({
  allTimes: state.allTimes
})

export default connect(mapStateToProps)(RecentTimes)

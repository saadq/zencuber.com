import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Timer from './Timer'
import Nav from '../components/Nav'
import Scramble from '../components/Scramble'
import TimerMode from '../components/TimerMode'
import InspectionTime from '../components/InspectionTime'
import RecentTimes from '../components/RecentTimes'

const App = ({ algorithm, allTimes }) => (
  <div>
    <Nav />
    <div className="container">
      <div className="row center">
        <div className="col s12 l9">
          <Scramble algorithm={algorithm} />
          <Timer />
        </div>
        <div id="settings">
          <TimerMode />
          <InspectionTime />
        </div>
        <div className="col s10 offset-s1 l3">
          <RecentTimes allTimes={allTimes} />
        </div>
      </div>
    </div>
  </div>
)

App.propTypes = {
  algorithm: PropTypes.string.isRequired,
  allTimes: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  algorithm: state.algorithm,
  allTimes: state.allTimes
})

export default connect(mapStateToProps)(App)

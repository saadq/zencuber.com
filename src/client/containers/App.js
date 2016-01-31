import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TimerContainer from './TimerContainer'
import Nav from '../components/Nav'
import Scramble from '../components/Scramble'
import TimerMode from '../components/TimerMode'
import InspectionTime from '../components/InspectionTime'
import RecentTimes from '../components/RecentTimes'
import * as TimerActions from '../actions'

const App = ({ actions, algorithm, times }) => (
  <div>
    <Nav />
    <div className="container">
      <div className="row center">
        <div className="col s12 l9">
          <Scramble algorithm={algorithm} />
          <TimerContainer />
        </div>
        <div id="settings">
          <TimerMode changeMode={actions.changeMode} />
          <InspectionTime changeInspection={actions.changeInspection} />
        </div>
        <div className="col s10 offset-s1 l3">
          <RecentTimes
            removeTime={actions.removeTime}
            clearTimes={actions.clearTimes}
            times={times}
          />
        </div>
      </div>
    </div>
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired,
  algorithm: PropTypes.string.isRequired,
  times: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  algorithm: state.algorithm,
  times: state.times
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TimerActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

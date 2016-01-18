import React from 'react'
import Nav from '../components/Nav'
import Scramble from '../components/Scramble'
import Timer from '../components/Timer'
import TimerMode from '../components/TimerMode'
import InspectionTime from '../components/InspectionTime'
import RecentTimes from '../components/RecentTimes'

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <div className="row center">
        <div className="col s12 l9">
          <Scramble />
          <Timer />
        </div>
        <div id="settings">
          <TimerMode />
          <InspectionTime />
        </div>
        <div className="col s10 offset-s1 l3">
          <RecentTimes />
        </div>
      </div>
    </div>
  </div>
)

export default App

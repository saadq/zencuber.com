import React from 'react'
import Nav from '../components/Nav'
import Scramble from '../components/Scramble'
import Timer from '../components/Timer'

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <div className="row center">
        <div className="col s12 l9">
          <Scramble />
          <Timer />
        </div>
      </div>
    </div>
  </div>
)

export default App

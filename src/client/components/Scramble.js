import React from 'react'
import { connect } from 'react-redux'

const Scramble = ({ algorithm }) => (
  <div>
    <br />
    <p id="scramble">{algorithm}</p>
  </div>
)

const mapStateToProps = (state) => ({
  algorithm: state.algorithm
})

export default connect(mapStateToProps)(Scramble)

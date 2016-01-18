import React from 'react'
import { connect } from 'react-redux'

const Scramble = ({ algorithm }) => (
  <p id="scramble">{algorithm}</p>
)

const mapStateToProps = (state) => ({
  algorithm: state.algorithm
})

export default connect(mapStateToProps)(Scramble)

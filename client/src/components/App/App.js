/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from '..'
import { initializeScramble } from '../../actions/scramble'
import './app.styl'

class App extends Component {
  props: {
    initializeScramble: () => mixed
  }

  componentWillMount() {
    this.props.initializeScramble()
  }

  render() {
    return <Layout />
  }
}

const mapDispatchToProps = {
  initializeScramble
}

export default connect(null, mapDispatchToProps)(App)

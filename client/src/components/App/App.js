/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from '..'
import { initializeScramble } from '../../actions/scramble'
import './app.styl'

type Props = {
  initializeScramble: () => mixed
}

class App extends Component {
  props: Props

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

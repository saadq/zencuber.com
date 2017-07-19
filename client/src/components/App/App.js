/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from '..'
import { initializeScramble } from '../../actions/scramble'
import type { State } from '../../types'
import './app.styl'

type Props = {
  scramble: {
    state: string,
    scrambleString: string
  },
  initializeScramble: () => mixed
}

class App extends Component {
  props: Props

  /**
   * Generates the curr and next scrambles if they don't exist.
   */

  componentWillMount() {
    const { scramble, initializeScramble } = this.props

    if (!scramble) {
      initializeScramble()
    }
  }

  /**
   * Renders the app.
   */

  render() {
    return <Layout />
  }
}

function mapStateToProps(state: State) {
  return {
    scramble: state.scramble
  }
}

const mapDispatchToProps = {
  initializeScramble
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

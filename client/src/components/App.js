/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectGlobal } from 'styled-components'
import TopBar from './TopBar'
import Home from './home/Home'
import { initializeScramble } from '../actions/scramble'
import { background, foreground } from './helpers/colors'
import type { State } from '../types'

injectGlobal`
  body {
    background: ${background};
    color: ${foreground};
    font-family: 'Avenir';
  }
`

class App extends Component {
  componentWillMount() {
    const { scramble, initializeScramble } = this.props

    if (!scramble) {
      initializeScramble()
    }
  }

  render() {
    return (
      <div>
        <TopBar />
        <Home />
      </div>
    )
  }
}

function mapStateToProps(state: State) {
  return {
    scramble: state.scramble.currScramble
  }
}

const mapDispatchToProps = {
  initializeScramble
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

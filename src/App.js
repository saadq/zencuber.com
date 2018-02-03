/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectGlobal } from 'styled-components'
import TopBar from './shared/components/TopBar'
import Home from './pages/Home'
import { initializeScramble } from './features/scramble/actions'
import { background, foreground } from './shared/colors'
import type { State } from './shared/types'

injectGlobal`
  body {
    background: ${background};
    color: ${foreground};
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
`

class App extends Component<*> {
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

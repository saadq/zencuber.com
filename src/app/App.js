/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectGlobal } from 'styled-components'
import { Header, Main } from './components'
import { initializeScramble } from '../features/scramble/actions'
import { background, foreground } from '../common/colors'
import type { State } from './types'
import Avenir from './assets/fonts/avenir.ttf'

injectGlobal`
  body {
    background: ${background};
    color: ${foreground};
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  @font-face {
    font-family: Avenir;
    src: url(${Avenir}) format('truetype');
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
        <Header />
        <Main />
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

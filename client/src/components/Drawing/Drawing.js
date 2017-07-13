/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import scramby from 'scramby'
import type { State } from '../../types'
import styles from './drawing.styl'

class Drawing extends Component {
  componentDidMount() {
    const { state } = this.props
    const scrambler = scramby()

    scrambler.drawScramble(this.refs.drawing, state, 300, 180)
  }

  render() {
    return (
      <div ref="drawing" className={styles.wrapper} />
    )
  }
}

function mapStateToProps(state: State) {
  if (!state.scramble.currScramble) {
    return {}
  }

  return {
    state: state.scramble.currScramble.state
  }
}

export default connect(mapStateToProps)(Drawing)

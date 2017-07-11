/**
 * @flow
 */

import React, { Component } from 'react'
import scramby from 'scramby'
import styles from './drawing.styl'

class Drawing extends Component {
  componentDidMount() {
    const scrambler = scramby()
    const { state } = scrambler.getRandomScramble()
    scrambler.drawScramble(this.refs.drawing, state, 300, 180)
  }

  render() {
    return (
      <div ref="drawing" className={styles.wrapper} />
    )
  }
}

export default Drawing

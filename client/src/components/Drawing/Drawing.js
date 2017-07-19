/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import scramby from 'scramby'
import type { State } from '../../types'
import styles from './drawing.styl'

type Props = {
  state: string
}

class Drawing extends Component {
  props: Props

  /**
   * Draw the scramble to the DOM when component has mounted.
   */

  componentDidMount() {
    this.updateDrawing()
  }

  /**
   * Only update if the scramble has changed.
   */

  shouldComponentUpdate(nextProps: Props) {
    return this.props.state !== nextProps.state
  }

  /**
   * Redraw to the DOM when the scramble has changed.
   */

  componentDidUpdate() {
    this.updateDrawing()
  }

  /**
   * Clears the previous scramble and redraws it based on the new scramble.
   */

  updateDrawing() {
    const { state } = this.props
    const { drawing } = this.refs
    const scrambler = scramby()

    drawing.innerHTML = ''
    scrambler.drawScramble(drawing, state, 300, 180)
  }

  /**
   * Display the drawing.
   */

  render() {
    return <div ref="drawing" className={styles.wrapper} />
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

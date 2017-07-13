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

  componentDidMount() {
    this.updateDrawing()
  }

  shouldComponentUpdate(nextProps: Props) {
    return this.props.state !== nextProps.state
  }

  componentDidUpdate() {
    this.updateDrawing()
  }

  updateDrawing() {
    const { state } = this.props
    const scrambler = scramby()

    this.refs.drawing.innerHTML = ''
    scrambler.drawScramble(this.refs.drawing, state, 300, 180)
  }

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

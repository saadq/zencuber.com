/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initializeScramble, updateScramble } from '../../actions'
import type { State } from '../../types'
import styles from './scramble.styl'

type Props = {
  scramble: string,
  updateScramble: Function,
  initializeScramble: Function
}

class Scramble extends Component {
  props: Props

  componentWillMount() {
    if (!this.props.scramble) {
      this.props.initializeScramble()
    }
  }

  render() {
    return (
      <p className={styles.scramble}>
        {this.props.scramble}
      </p>
    )
  }
}

function mapStateToProps(state: State) {
  return {
    scramble: state.scramble.currScramble
  }
}

const mapDispatchToProps = {
  initializeScramble,
  updateScramble
}

export default connect(mapStateToProps, mapDispatchToProps)(Scramble)

/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import { initializeScramble, updateScramble } from '../../actions/scramble'
import type { State } from '../../types'
import styles from './scramble.styl'

type Props = {
  scramble: {
    scrambleString: string,
    state: string
  },
  updateScramble: () => mixed,
  initializeScramble: () => mixed
}

/**
 * Displays the Scramble component
 */

function Scramble({ scramble }: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <p className={styles.scramble}>
          {scramble.scrambleString}
        </p>
      </div>
    </div>
  )
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

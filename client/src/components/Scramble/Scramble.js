/**
 * @flow
 */

import React from 'react'
import Scrambo from 'scrambo'
import styles from './scramble.styl'

function Scramble() {
  return (
    <p className={styles.scramble}>
      {new Scrambo().type('333').get()}
    </p>
  )
}

export default Scramble

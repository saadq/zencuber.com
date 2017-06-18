/**
 * @flow
 */

import React from 'react'
import Scrambo from 'scrambo'
import styles from './scramble.styl'

function Scramble() {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-center']}>
        <p className={styles.scramble}>
          {new Scrambo().type('333').get()}
        </p>
      </div>
    </nav>
  )
}

export default Scramble

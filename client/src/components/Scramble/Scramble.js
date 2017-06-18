/**
 * @flow
 */

import React from 'react'
import Scrambo from 'scrambo'
import styles from './scramble.styl'

function Scramble() {
  return (
    <nav className={`nav ${styles.nav}`}>
      <div className="nav-left" />
      <div className="nav-center">
        <p className={styles.scramble}>
          {new Scrambo().type('333').get()}
        </p>
      </div>
      <div className="nav-right is-flex" />
    </nav>
  )
}

export default Scramble

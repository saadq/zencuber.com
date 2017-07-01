/**
 * @flow
 */

import React from 'react'
import styles from './stats.styl'

function Stats() {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <ul className={styles['stats-list']}>
          <li>
            Mean of 3<br />
            <span className={styles.time}>31.19</span>
          </li>
          <li>
            Average of 5<br />
            <span className={styles.time}>33.26</span>
          </li>
          <li>
            Average of 12<br />
            <span className={styles.time}>35.28</span>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h1>times</h1>
      </div>
    </div>
  )
}

export default Stats

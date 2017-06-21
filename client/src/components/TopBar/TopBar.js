/**
 * @flow
 */

import React from 'react'
import styles from './top-bar.styl'

function TopBar() {
  return (
    <nav className={styles.nav}>
      <div className="nav-left is-hidden-mobile" />
      <div className="nav-center">
        <div className="nav-item">
          <div className={styles.logo}>ZOA</div>
        </div>
      </div>
      <div className="nav-right">
        <span className={`nav-toggle ${styles.menu}`}>
          <span />
          <span />
          <span />
        </span>
      </div>
    </nav>
  )
}

export default TopBar

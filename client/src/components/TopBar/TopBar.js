/**
 * @flow
 */

import React from 'react'
import styles from './top-bar.styl'

function TopBar() {
  return (
    <nav className="nav">
      <div className="nav-left" />
      <div className="nav-center">
        <a className="nav-item hero-brand" href="/">
          <h2 className={styles.logo}>Lyte</h2>
        </a>
      </div>
      <div className="nav-right is-flex">
        <p>hi</p>
      </div>
    </nav>
  )
}

export default TopBar

/**
 * @flow
 */

import React from 'react'
import { TopBar, Timer, Scramble, Stats, Drawing } from '..'
import styles from './layout.styl'

/**
 * Renders the main structure for the app.
 */

function Layout() {
  return (
    <section className={styles.hero}>
      <div className={styles.head}>
        <TopBar />
      </div>
      <div className={styles.body}>
        <div className="container">
          <Timer />
        </div>
      </div>
      <div className={styles.foot}>
        <Scramble />
        <div className={styles.row}>
          <div className={styles.column}>
            <Stats />
          </div>
          <div className={styles.column}>
            <Drawing />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout

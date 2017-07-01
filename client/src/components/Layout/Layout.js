/**
 * @flow
 */

import React from 'react'
import { TopBar, Timer, Scramble, Stats } from '..'
import styles from './layout.styl'

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
        <Stats />
      </div>
    </section>
  )
}

export default Layout

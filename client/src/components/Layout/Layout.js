/**
 * @flow
 */

import React from 'react'
import { TopBar, Timer, Scramble } from '..'
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
          <Scramble />
        </div>
      </div>
    </section>
  )
}

export default Layout

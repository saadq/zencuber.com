/**
 * @flow
 */

import React from 'react'
import { TopBar, Timer, Scramble, Stats } from '..'
import styles from './hero.styl'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.head}>
        <TopBar />
      </div>
      <div className={styles.body}>
        <div className={styles.container}>
          <Scramble />
          <Timer />
          <Stats />
        </div>
      </div>
    </section>
  )
}

export default Hero

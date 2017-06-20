/**
 * @flow
 */

import React from 'react'
import { Timer, Scramble } from '..'
import styles from './hero.styl'

function Hero() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <nav className="nav">
          <div className="nav-left" />
          <div className="nav-center">
            <p className={`nav-item ${styles.logo}`}>VAV</p>
          </div>
          <div className="nav-right" />
        </nav>
      </div>
      <div className={styles['hero-body']}>
        <div className="container">
          <Scramble />
          <Timer />
        </div>
      </div>
    </section>
  )
}

export default Hero

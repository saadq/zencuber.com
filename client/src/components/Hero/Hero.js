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
          <div className="nav-left is-hidden-mobile" />
          <div className="nav-center">
            <div className="nav-item">
              <div className={styles.logo}>VAV</div>
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
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Scramble />
          <Timer />
        </div>
      </div>
    </section>
  )
}

export default Hero

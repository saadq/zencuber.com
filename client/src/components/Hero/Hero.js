/**
 * @flow
 */

import React from 'react'
import { TopBar } from '..'
import type { Element } from 'react'
import styles from './hero.styl'

type Props = {
  children: Element<*>
}

function Hero({ children }: Props) {
  return (
    <section className={`hero is-fullheight ${styles.hero}`}>
      <div className="hero-head">
        <TopBar />
      </div>
      <div className="hero-body">
        <div className="container">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Hero

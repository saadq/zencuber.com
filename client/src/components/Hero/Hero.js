/**
 * @flow
 */

import React from 'react'
import type { Element } from 'react'

type Props = {
  children: Element<*>
}

function Hero(props: Props) {
  return (
    <section className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 className="title is-2">
            {props.children}
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Hero

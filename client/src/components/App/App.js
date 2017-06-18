/**
 * @flow
 */

import React from 'react'
import { Timer } from '..'
import './app.styl'

function App() {
  return (
    <section className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 className="title is-2">
            <Timer />
          </h3>
        </div>
      </div>
    </section>
  )
}

export default App

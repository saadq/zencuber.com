import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { timeFormatter } from '../../util'

class Stopwatch extends Component {
  componentDidMount() {
    const button = findDOMNode(this.refs.btn)
    let justStopped = false

    window.addEventListener('keyup', (event) => {
      event.preventDefault()
      if (event.which === 32 && !this.props.isOn) {
        if (justStopped) {
          justStopped = false
          return
        }
        button.click()
      }
    })

    window.addEventListener('keydown', (event) => {
      if (event.which === 32) {
        event.preventDefault()
        if (this.props.isOn) {
          justStopped = true
          button.click()
        }
      }
    })
  }

  render() {
    const btnClasses = 'btn-large waves-effect waves-light'
    const { isOn, elapsed, click } = this.props

    return (
      <div>
        <h1 id="timer">{timeFormatter(elapsed)}</h1>
        <button ref="btn" onClick={click} id="timer-button" className={btnClasses}>
          {isOn ? 'Stop' : 'Start'}
        </button>
      </div>
    )
  }
}

export default Stopwatch

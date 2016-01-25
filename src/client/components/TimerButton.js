import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

class TimerButton extends Component {
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
    const { isOn, click } = this.props

    return (
      <button ref="btn" onClick={click} id="timer-button" className={btnClasses}>
        {isOn ? 'Stop' : 'Start'}
      </button>
    )
  }
}

TimerButton.propTypes = {
  isOn: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
}

export default TimerButton

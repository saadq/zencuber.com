import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { isSpaceKey } from '../../util'

class TimerButton extends Component {
  componentDidMount() {
    const button = findDOMNode(this.refs.btn)
    let justStopped = false

    window.addEventListener('keyup', (e) => {
      const key = e.which

      if (!this.props.isOn && justStopped) {
        justStopped = false
        return
      }

      else if (isSpaceKey(key)) {
        e.preventDefault()
        button.click()
      }
    })

    window.addEventListener('keydown', (e) => {
      const key = e.which

      if (isSpaceKey(key)) {
        e.preventDefault()
      }

      if (this.props.isOn) {
        justStopped = true
        button.click()
      }
    })
  }

  render() {
    const btnClasses = 'btn-large waves-effect waves-light'
    const btnId = 'timer-button'
    const { isOn, click } = this.props

    return (
      <button ref="btn" onClick={click} id={btnId} className={btnClasses}>
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

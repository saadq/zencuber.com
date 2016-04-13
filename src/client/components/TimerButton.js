import React, { Component, PropTypes } from 'react'
import { isSpaceKey } from '../../util'

class TimerButton extends Component {
  componentDidMount() {
    const { click, step, isOn } = this.props
    let justStopped = false

    window.addEventListener('keyup', (e) => {
      console.log(`keyup isOn: ${isOn}`)
      const key = e.which

      if (!this.props.isOn && justStopped) {
        justStopped = false
        return
      }

      else if (isSpaceKey(key) && !isOn && step === 0) {
        e.preventDefault()
        click()
      }
    })

    window.addEventListener('keydown', (e) => {
      console.log(`keydown isOn: ${isOn}`)

      const key = e.which

      if (isSpaceKey(key)) {
        e.preventDefault()
      }

      if (isOn) {
        justStopped = true
        click()
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
  click: PropTypes.func.isRequired,
  step: PropTypes.number
}

export default TimerButton

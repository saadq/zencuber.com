import React, { PropTypes } from 'react'
const $ = window.$

class TimerMode extends React.Component {
  componentDidMount () {
    const $timerMode = $(this.refs.timerMode)
    $timerMode.material_select()
    $timerMode.on('change', this.onChange.bind(this))
  }

  onChange (e) {
    const mode = e.target.value
    this.props.changeMode(mode)
  }

  render () {
    const classes = 'input-field col s10 offset-s1 l3'

    return (
      <div className={classes}>
        <select ref='timerMode'>
          <option value='normal'>Normal</option>
          <option value='beginner'>Layer by Layer</option>
          <option value='cfop'>CFOP</option>
          <option value='roux'>Roux</option>
        </select>
        <label>Timer Mode</label>
      </div>
    )
  }
}

TimerMode.propTypes = {
  changeMode: PropTypes.func.isRequired
}

export default TimerMode

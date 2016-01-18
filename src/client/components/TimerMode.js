import React from 'react'
import ReactDOM from 'react-dom'

class TimerMode extends React.Component {
  componentDidMount() {
    let $modeDropdown = $(ReactDOM.findDOMNode(this.refs.mode))
    $modeDropdown.on('change', this.props.change)
  }

  render() {
    let classes = 'input-field col s10 offset-s1 l3'

    return (
      <div className={classes}>
        <select ref="mode">
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

export default TimerMode

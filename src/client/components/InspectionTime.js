import React from 'react'
import ReactDOM from 'react-dom'

class InspectionTime extends React.Component {
  componentDidMount() {
    let $inspectionDropdown = $(ReactDOM.findDOMNode(this.refs.inspection))
    $inspectionDropdown.on('change', this.props.change)
  }

  render() {
    let classes = 'input-field col s10 offset-s1 l3'

    return (
      <div className={classes}>
        <select ref="inspection">
          <option value="0">None</option>
          <option value='5'>5 Seconds</option>
          <option value='10'>10 Seconds</option>
          <option value='15'>15 Seconds</option>
        </select>
        <label>Inspection Time</label>
      </div>
    )
  }
}

export default InspectionTime

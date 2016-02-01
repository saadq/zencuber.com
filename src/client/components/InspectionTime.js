import React, { PropTypes } from 'react'
const $ = window.$

class InspectionTime extends React.Component {
  componentDidMount() {
    const $inspectionTime = $(this.refs.inspectionTime)
    $inspectionTime.material_select()
    $inspectionTime.on('change', this.onChange.bind(this))
  }

  onChange(e) {
    const inspectionTime = parseInt(e.target.value, 10)
    this.props.changeInspection(inspectionTime)
  }

  render() {
    const classes = 'input-field col s10 offset-s1 l3'

    return (
      <div className={classes}>
        <select ref="inspectionTime">
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

InspectionTime.propTypes = {
  changeInspection: PropTypes.func.isRequired
}

export default InspectionTime

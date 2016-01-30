import React from 'react'

class InspectionTime extends React.Component {
  componentDidMount() {
    $(this.refs.inspection).material_select()
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

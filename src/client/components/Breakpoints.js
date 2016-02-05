import React, { Component } from 'react'
import BreakpointsDisplay from './BreakpointsDisplay'

class Breakpoints extends Component {
  getSteps() {
    switch (this.props.mode) {
      case 'beginner': return ['Layer 1', 'Layer 2', 'Edges', 'Corners']
      case 'cfop': return ['Cross', 'F2L', 'OLL', 'PLL']
      case 'roux': return ['Block 1', 'Block 2', 'CMLL', 'L6E']
    }
  }

  render() {
    return (
      <BreakpointsDisplay times={this.props.times} steps={this.getSteps()} />
    )
  }
}

export default Breakpoints

/**
 * @flow
 */

import React, { Component } from 'react'
import styled from 'styled-components'
import scramby from 'scramby'

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  opacity: .85;
`

type Props = {
  scramble: string
}

class Drawing extends Component {
  props: Props
  scrambler: *

  /**
   * Draw the scramble to the DOM when component has mounted.
   */

  componentDidMount() {
    this.updateDrawing()
    this.scrambler = scramby()
  }

  /**
   * Only update if the scramble has changed.
   */

  shouldComponentUpdate(nextProps: Props) {
    return this.props.scramble !== nextProps.scramble
  }

  /**
   * Redraw to the DOM when the scramble has changed.
   */

  componentDidUpdate() {
    this.updateDrawing()
  }

  /**
   * Clears the previous scramble and redraws it based on the new scramble.
   */

  updateDrawing() {
    const { scramble } = this.props
    const { drawing } = this.refs

    drawing.innerHTML = ''
    this.scrambler.drawScramble(drawing, scramble, 300, 180)
  }

  /**
   * Display the drawing.
   */

  render() {
    return (
      <FlexBox>
        <div ref="drawing" />
      </FlexBox>
    )
  }
}

export default Drawing

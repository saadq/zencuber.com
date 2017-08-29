/**
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Flex } from '../helpers'
import { timeFormatter } from '../../util'
import type { State, Solve } from '../../types'

const Flexbox = Flex.extend`
  height: 100%;
`

const Table = styled.table`
  width: 80%;
  height: 70%;
  background: #22262F;
  text-align: center;
  display: flex;
  flex-flow: column;
  border-radius: 3px;
  overflow-y: auto;
  justify-content: center;
`

type RowProps = {
  disabled: boolean
}

const Row = styled.tr`
  width: 100%;
  display: table;
  table-layout: fixed;
  opacity: ${(props: RowProps) => (props.disabled ? 0.5 : 1)};
`

const Cell = styled.td`
  padding: 10px 0;
`

type Props = {
  solves: Array<Solve>
}

class Stats extends Component {
  props: Props

  getMean(solves: Array<Solve>): number {
    const times = solves.map(solve => solve.time)
    const sum = times.reduce((acc, time) => acc + time, 0)

    return sum / times.length
  }

  getAverage(solves: Array<Solve>): number {
    return this.getMean(solves)
  }

  getStat(count: number): string {
    const { solves } = this.props

    if (solves.length < count) {
      return '-- . --'
    }

    return timeFormatter(this.getAverage(solves.slice(0, count)))
  }

  render() {
    const { solves } = this.props

    return (
      <Flexbox direction="column" align="center" justify="center">
        <Table>
          <tbody>
            <Row disabled={solves.length < 3}>
              <Cell>Mo3</Cell>
              <Cell>
                {this.getStat(3)}
              </Cell>
            </Row>
            <Row disabled={solves.length < 5}>
              <Cell>Ao5</Cell>
              <Cell>
                {this.getStat(5)}
              </Cell>
            </Row>
            <Row disabled={solves.length < 12}>
              <Cell>Ao12</Cell>
              <Cell>
                {this.getStat(12)}
              </Cell>
            </Row>
            <Row disabled={solves.length < 50}>
              <Cell>Ao50</Cell>
              <Cell>
                {this.getStat(50)}
              </Cell>
            </Row>
            <Row disabled={solves.length < 100}>
              <Cell>Ao100</Cell>
              <Cell>
                {this.getStat(100)}
              </Cell>
            </Row>
          </tbody>
        </Table>
      </Flexbox>
    )
  }
}

function mapStateToProps(state: State) {
  return {
    solves: state.solves
  }
}

export default connect(mapStateToProps)(Stats)

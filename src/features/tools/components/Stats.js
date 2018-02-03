/**
 * @flow
 */

import React, { Component } from 'react'
import styled from 'styled-components'
import { timeFormatter } from '../../../common/util'
import type { Solve } from '../types'

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Table = styled.table`
  width: 80%;
  height: 70%;
  background: #22262f;
  text-align: center;
  display: flex;
  flex-flow: column;
  border-radius: 3px;
  overflow-y: auto;
  justify-content: center;
`

const Row = styled.tr`
  width: 100%;
  display: table;
  table-layout: fixed;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`

const Cell = styled.td`
  padding: 10px 0;
`

type Props = {
  solves: Array<Solve>
}

class Stats extends Component<*> {
  props: Props

  /**
   * Calculates the mathematical mean of a list of times.
   *
   * @param times The list of times
   *
   * @return The mathematical mean of a list of times
   */

  getMean(times: Array<number>): number {
    const sum = times.reduce((acc, time) => acc + time, 0)
    const mean = sum / times.length

    return mean
  }

  /**
   * Removes the best 5% and worst 5% of solves and then
   * returns the mathematical mean of the remaining solves
   * in the list.
   *
   * @param times The list of times
   *
   * @return The mean of the normalized set of times
   */

  getAverage(times: Array<number>): number {
    const count = times.length
    const timesToRemove = Math.ceil(0.05 * count)
    const truncated = times.sort().slice(timesToRemove, count - timesToRemove)

    return this.getMean(truncated)
  }

  /**
   * Return the average of the most recent `n` solves,
   * where `n` is either 3, 5, 12, 50, or 100.
   *
   * In the case that `n` is 3, simply return the mean.
   *
   * @param count The amount of solves to calculate the statistic for
   *
   * @return The formatted statistic
   */

  getStat(count: number): string {
    const { solves } = this.props

    if (solves.length < count) {
      return '-- . --'
    }

    const times = solves.slice(0, count).map(solve => solve.time)
    const average = count === 3 ? this.getMean(times) : this.getAverage(times)

    return timeFormatter(average)
  }

  render() {
    const { solves } = this.props

    return (
      <Flexbox>
        <Table>
          <tbody>
            <Row disabled={solves.length < 3}>
              <Cell>Mo3</Cell>
              <Cell>{this.getStat(3)}</Cell>
            </Row>
            <Row disabled={solves.length < 5}>
              <Cell>Ao5</Cell>
              <Cell>{this.getStat(5)}</Cell>
            </Row>
            <Row disabled={solves.length < 12}>
              <Cell>Ao12</Cell>
              <Cell>{this.getStat(12)}</Cell>
            </Row>
            <Row disabled={solves.length < 50}>
              <Cell>Ao50</Cell>
              <Cell>{this.getStat(50)}</Cell>
            </Row>
            <Row disabled={solves.length < 100}>
              <Cell>Ao100</Cell>
              <Cell>{this.getStat(100)}</Cell>
            </Row>
          </tbody>
        </Table>
      </Flexbox>
    )
  }
}

export default Stats

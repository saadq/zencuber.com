/**
 * @flow
 */

import React from 'react'
import Tooltip from 'react-tooltip'
import styled from 'styled-components'
import { Flex, Button } from '../../../shared/components'
import { primary, subtle } from '../../../shared/colors'
import type { Solve } from '../../../shared/types'

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
`

const Row = styled.tr`
  width: 100%;
  display: table;
  table-layout: fixed;
  &:hover {
    background: ${primary};
    color: black;
    cursor: pointer;
  }
`

const Cell = styled.td`
  padding: 10px 0;
  &:nth-child(3) {
    color: ${subtle};
  }
`

type Props = {
  solves: Array<Solve>,
  clearSolves: () => mixed,
  removeSolve: (solveId: number) => mixed
}

function Solves({ solves, clearSolves, removeSolve }: Props) {
  return (
    <Flexbox direction="column" align="center" justify="center">
      <Table>
        <tbody>
          {solves.map((solve, i) =>
            <Row key={i} data-tip data-for={`${i}`}>
              <Cell>{solves.length - i}.</Cell>
              <Cell>
                {solve.formattedTime.slice(0, -1)}
                <Tooltip id={`${i}`} effect="solid">
                  <div>{solve.scramble}</div>
                </Tooltip>
              </Cell>
              <Cell><span onClick={() => removeSolve(i)}>X</span></Cell>
            </Row>
          )}
        </tbody>
      </Table>
      <Button onClick={clearSolves}>Clear Solves</Button>
    </Flexbox>
  )
}

export default Solves

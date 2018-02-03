/**
 * @flow
 */

import React from 'react'
import Tooltip from 'react-tooltip'
import styled from 'styled-components'
import { Button } from '../../../common/components'
import { primary, subtle } from '../../../common/colors'
import type { Solve } from '../../../app/types'

const Flexbox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const ClearButton = Button.extend`
  margin: 15px;
`

type Props = {
  solves: Array<Solve>,
  clearSolves: () => mixed,
  removeSolve: (solveId: number) => mixed
}

function Solves({ solves, clearSolves, removeSolve }: Props) {
  return (
    <Flexbox>
      <Table>
        <tbody>
          {solves.map((solve, i) => (
            <Row key={i} data-tip data-for={`${i}`}>
              <Cell>{solves.length - i}.</Cell>
              <Cell>
                {solve.formattedTime.slice(0, -1)}
                <Tooltip id={`${i}`} effect="solid">
                  <div>{solve.scramble}</div>
                </Tooltip>
              </Cell>
              <Cell>
                <span onClick={() => removeSolve(i)}>X</span>
              </Cell>
            </Row>
          ))}
        </tbody>
      </Table>
      <ClearButton onClick={clearSolves}>Clear Solves</ClearButton>
    </Flexbox>
  )
}

export default Solves

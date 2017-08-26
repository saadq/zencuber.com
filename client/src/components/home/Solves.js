/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import Tooltip from 'react-tooltip'
import styled from 'styled-components'
import { SolvesActions } from '../../actions'
import { Flex, Button, primary, subtle } from '../helpers'
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

  tr {
    width: 100%;
    display: table;
    table-layout: fixed;
    &:hover {
      background: ${primary};
      color: black;
      cursor: pointer;
    }
  }

  td {
    padding: 10px 0;
    &:nth-child(3) {
      color: ${subtle};
    }
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
            <tr data-tip data-for={`${i}`}>
              <td>{solves.length - i}.</td>
              <td>
                {solve.time}
                <Tooltip id={`${i}`} effect="solid">
                  <div>{solve.scramble}</div>
                </Tooltip>
              </td>
              <td><span onClick={() => removeSolve(i)}>X</span></td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button onClick={clearSolves}>Clear Solves</Button>
    </Flexbox>
  )
}

function mapStateToProps(state: State) {
  return {
    solves: state.solves
  }
}

const mapDispatchToProps = {
  ...SolvesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Solves)

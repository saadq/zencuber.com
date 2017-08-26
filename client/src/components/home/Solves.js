/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import Tooltip from 'react-tooltip'
import styled from 'styled-components'
import { SolvesActions } from '../../actions'
import { foreground, primary, subtle, background } from '../helpers/colors'
import type { State, Solve } from '../../types'

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  overflow-y: scroll;

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

const Button = styled.button`
  margin: 15px 5px;
  padding: 10px 15px;
  background: ${background};
  color: ${foreground};
  border: 0;
  border-radius: 2px;
  text-transform: uppercase;
  transition: background-color .25s ease-in;
  &:hover {
    background: black;
    cursor: pointer;
  }
`

type Props = {
  solves: Array<Solve>,
  clearSolves: () => mixed
}

function Solves({ solves, clearSolves }: Props) {
  return (
    <FlexBox>
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
              <td><span>X</span></td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button onClick={clearSolves}>Clear Solves</Button>
    </FlexBox>
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

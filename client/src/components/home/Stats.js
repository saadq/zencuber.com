/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Flex, primary, subtle } from '../helpers'

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
  align-items: center;

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

function Stats() {
  return (
    <Flexbox direction="column" align="center" justify="center">
      <Table>
        <tbody>
          <tr>
            <td>Mo3</td>
            <td>32.47</td>
          </tr>
          <tr>
            <td>Ao5</td>
            <td>21.49</td>
          </tr>
          <tr>
            <td>Ao12</td>
            <td>35.49</td>
          </tr>
          <tr>
            <td>Ao50</td>
            <td>36.32</td>
          </tr>
          <tr>
            <td>Ao100</td>
            <td>34.65</td>
          </tr>
        </tbody>
      </Table>
    </Flexbox>
  )
}

export default Stats

import React from 'react'
import styled from 'styled-components'
import { primary, subtle } from '../helpers/colors'

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const Table = styled.table`
  width: 80%;
  height: 80%;
  background: #22262F;
  text-align: center;
  display: flex;
  flex-flow: column;
  border-radius: 3px;

  tbody {
    overflow-y: scroll;
  }

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

function Times() {
  return (
    <FlexBox>
      <Table>
        <tbody>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>32.47</td>
            <td>X</td>
          </tr>
        </tbody>
      </Table>
    </FlexBox>
  )
}

export default Times

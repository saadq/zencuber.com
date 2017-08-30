/**
 * @flow
 */

import styled from 'styled-components'
import { foreground } from '../colors'

const Button = styled.button`
  margin: 15px 5px;
  padding: 10px 15px;
  background: #2a2e39;
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

export default Button

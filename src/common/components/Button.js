/**
 * @flow
 */

import styled from 'styled-components'
import { foreground } from '../colors'

const Button = styled.button`
  padding: 10px 15px;
  background: #2a2e39;
  color: ${foreground};
  border: 0;
  border-radius: 2px;
  text-transform: uppercase;
  transition: background-color 0.25s ease-in;
  &:hover {
    background: black;
    cursor: pointer;
  }
`

export default Button

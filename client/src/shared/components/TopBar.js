/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { primary, background, borders } from '../colors'

const Nav = styled.nav`
  height: 7vh;
  width: 100%;
  background: ${background};
  color: ${primary};
  border-bottom: 1px solid ${borders};
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 100%;
  font-size: 1em;
`

function TopBar() {
  return (
    <Nav>
      <Logo>
        <i className="mdi mdi-cube-outline" />
        zen
      </Logo>
    </Nav>
  )
}

export default TopBar

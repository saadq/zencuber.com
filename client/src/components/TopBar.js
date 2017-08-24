/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  height: 50px;
  width: 100%;
  background: #20232C;
  color: #73e3ff;
  border-bottom: 1px solid #2a2e39;
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

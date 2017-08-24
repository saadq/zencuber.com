/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 75px;
  width: 100%;
  background: #20232C;
  border-bottom: 1px solid #2a2e39;
`

const Logo = styled.h1`
  padding-left: 25px;
  color: #73e3ff;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 1px;
`

function TopBar() {
  return (
    <Nav>
      <Logo>zen</Logo>
    </Nav>
  )
}

export default TopBar

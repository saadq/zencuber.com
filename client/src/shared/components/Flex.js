/**
 * @flow
 */

import styled from 'styled-components'

type Props = {
  align: string,
  direction: string,
  height: string
}

const Flex = styled.div`
  display: flex;
  align-items: ${(props: Props) => props.align || 'initial'};
  justify-content: ${(props: Props) => props.justify || 'initial'};
  flex-direction: ${(props: Props) => props.direction || 'initial'};
  height: ${(props: Props) => props.height || 'initial'};
`

export default Flex

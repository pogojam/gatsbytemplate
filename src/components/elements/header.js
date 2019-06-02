import styled from "styled-components"
import { space, gridArea } from "styled-system"

const Header = styled.h1`
  ${space}
  ${gridArea}
`

const h2 = styled.h2`
  ${space}
  ${gridArea}
`

const h3 = styled.h3`
  ${space}
  ${gridArea}
`

Header.h2 = h2
Header.h3 = h3

export default Header

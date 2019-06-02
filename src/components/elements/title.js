import styled from "styled-components"
import {
  justifyContent,
  gridGap,
  space,
  maxWidth,
  minWidth,
  fontSize,
  color,
  alignItems,
  display,
  flexBasis,
} from "styled-system"

const Title = styled.h2`
font-weight: 100;

    ${maxWidth}
  ${display}
  ${gridGap}
  ${space}
  ${justifyContent}
  ${minWidth}

`

export default Title

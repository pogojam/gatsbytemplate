import styled from "styled-components"
import theme from 'styled-theming'
import React from 'react'
import {Link} from 'gatsby'
import {
  space,
  flex,
  justifyItems,
  justifyContent,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
 
} from "styled-system"

const StyledButton = styled.button`

        ${space}
        ${flex}
        ${justifyItems}
        ${justifyContent}
        ${display}
        ${fontSize}
        ${fontFamily}
        ${fontWeight}
        ${lineHeight}
    font-size:${buttonFontSize};
    background:none;
    border:1px black solid;
    border-radius:30px;
`

const buttonFontSize = theme.variants('layout', 'kind', {
  small: { compact: '0.9rem', cozy: '1.2rem' },
  medium: { compact: '1rem', cozy: '1.3rem' },
  large: { compact: '1.1rem', cozy: '1.4rem' },
});




const Button = ({ name,to,kind }) => (
  <Link to={to}>
    <StyledButton kind >{name}</StyledButton>
  </Link>
)


export default Button

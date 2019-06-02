import styled from "styled-components"
import {
  space,
  flex,
  justifyItems,
  justifyContent,
  display,
} from "styled-system"

const Button = styled.button`

        ${space}
        ${flex}
        ${justifyItems}
        ${justifyContent}
        ${display}

    background:none;
    border:1px black solid;
    border-radius:30px;

`

export default Button

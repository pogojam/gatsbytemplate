import styled, { css } from "styled-components"
import {
  space,
  flex,
  justifyItems,
  justifyContent,
  display,
  gridArea,
  gridRow,
  gridColumn,
  background,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  color,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  position,
  borderBottom,
} from "styled-system"

const cssFlexCenter = css`
  justify-content: center;
  align-items: center;
  display: flex;
`

const cssFlexLeft = css`
  justify-content: center;
  align-items: left;
  display: flex;
`
const cssGrid = css`
  display: grid;
`

const Container = styled.div`     
        ${display}
        ${gridArea}
        ${gridRow}
        ${gridColumn}
        ${gridAutoRows}
        ${gridAutoColumns}
        ${gridTemplateRows}
        ${gridTemplateColumns}
        ${gridTemplateAreas}
        ${background}
        ${space}
        ${flex}
        ${justifyItems}
        ${justifyContent}
        ${background}
        ${minHeight}
        ${minWidth}
        ${maxWidth}
        ${maxHeight}
        ${color}
        ${position}
        ${borderBottom}
`

export default Container

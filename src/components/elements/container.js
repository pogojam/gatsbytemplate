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
  gridGap,
  position,
  borderBottom,
  alignItems,
  alignContent,
  zIndex,
  top,
  right,
  bottom,
  left,
  borderRadius,
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

const Container = styled.div`     

  /* Component kinds */

  ${({ cssFlexLeft }) => cssFlexLeft}
  ${({ cssFlexRight }) => cssFlexRight}



        ${display}
        ${gridGap}
        ${gridArea}
        ${gridRow}
        ${gridColumn}
        ${gridAutoRows}
        ${gridAutoColumns}
        ${gridTemplateRows}
        ${gridTemplateColumns}
        ${gridTemplateAreas}
        ${background}
        ${borderRadius}
        ${space}
        ${flex}
        ${justifyItems}
        ${justifyContent}
        ${minHeight}
        ${minWidth}
        ${maxWidth}
        ${maxHeight}
        ${color}
        ${position}
        ${borderBottom}
        ${alignItems}
        ${top}
  ${right}
  ${bottom}
  ${left}
  ${alignContent}
        ${({ CSS }) => CSS}
`

export default Container

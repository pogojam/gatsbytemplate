import React, { Component } from "react"
import styled from "styled-components"
import { Container } from "./"
import {
  gridArea,
  display,
  color,
  minWidth,
  minHeight,
  gridGap,
  gridRow,
  gridTemplateAreas,
} from "styled-system"

class Grid extends Component {
  serializeArea(area) {
    if (!Array.isArray(area)) {
      console.error("Please supply Array to area prop of Grid")
      return
    }

    const convertedData = area.map(el => {
      let row = ""
      let prefix = "box"

      el.forEach((num, i) => {
        row += prefix + num + " "
      })
      return row
    })

    const array = convertedData.map(val => `"${val}"`)
    const serializeArea = array.reduce((acc, val) => acc + val)

    return serializeArea
  }

  buildGrid(input) {
    let AreaDepth = this.getArrayDepth(input)
    const Area = []

    if (AreaDepth > 2) {
      input.forEach(tem => Area.push(this.serializeArea(tem)))
    } else {
      Area.push(this.serializeArea(input))
    }

    return Area
  }

  getArrayDepth = array => {
    let TrueDepth = 0

    const dig = (e, depth) => {
      if (Array.isArray(e)) {
        depth && (depth = e.length)
        depth -= 1
        ++TrueDepth
        dig(e[0])
      }
    }
    dig(array)

    return TrueDepth
  }

  cloneElement(el, prop) {
    return React.cloneElement(el, {
      gridArea: prop.areaName,
    })
  }

  makeStyledComponent(component) {
    // if (component.type.styledComponentId) return component

    // Temp retrun for continued development of StyledWraper around non styled compnents

    return component

    const BaseStyledComponent = styled()`
      ${gridTemplateAreas}
    `

    return BaseStyledComponent
  }

  render() {
    const { template } = this.props
    const children = React.Children.map(this.props.children, (child, i) => {
      const Props = { areaName: "box" + i }
      const styledChild = this.cloneElement(
        this.makeStyledComponent(child),
        Props
      )

      return styledChild
    })

    // const Template = css`
    //   ${this.serializedArea(template)}
    // `;

    //Test if element is a valid react component

    // const test = children.map(chil => React.isValidElement(chil))

    return (
      <Container
        gridTemplateAreas={this.buildGrid(template)}
        display="grid"
        minWidth="100%"
        minHeight="100%"
        {...this.props}
      >
        {children}
      </Container>
    )
  }
}

export default Grid

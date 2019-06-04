import React from "react"
import styled from "styled-components"
import { Container, Header } from "../elements"

const Box = styled(Container)`
  background: #100d29ba;
  border-radius: 1.5em;
`
const Dash = styled(Container)``

const Button = styled(Container)``

const PicView = styled.img`
  border-radius: 50%;
  background: url(${({ img }) => img});
`

const ProfileInfo = props => (
  <Dash {...props}>
    <PicView img={props.img} />
    <span>Hello</span>
    <Header.h3>{props.name}</Header.h3>
  </Dash>
)

Dash.ProfileInfo = ProfileInfo
Dash.Box = Box

export default Dash

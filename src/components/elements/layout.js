import React from "react"
import { Grid, Container } from "./"
import { Nav, Footer } from "../blocks"
import Template from "../../templates/layoutTemplate"
import "../layout.css"
import styled, { css } from "styled-components"
import { Subscribe } from "unstated"
import Background from "react-particles-js"
import ParticleParam from "./particle"
import "animate.css"

const Links = [{ name: "Contact", to: "/contact" }, { name: "Home", to: "/" }]

const Styles = css`
  background-size: cover;
  background-repeat: none;
`

const Layout = ({ children, template }) => (
  <>
    <Background
      canvasClassName="particles"
      className="particles"
      params={ParticleParam}
    />
    <Grid
      CSS={Styles}
      template={Template[0]}
      gridTemplateRows="10vh auto 20vh"
      minWidth="100vw"
      minHeight="100vh"
    >
      <Nav Link={Links} display="flex" />
      <Container>{children}</Container>
      <Footer display="none" bg="black" />
    </Grid>
  </>
)

export default Layout

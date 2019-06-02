import React from "react"
import { Grid, Container } from "./"
import { Nav, Footer } from "../blocks"
import Template from "../../templates/layoutTemplate"
import "../layout.css"
import { Subscribe } from "unstated"

console.log(Template)

const Links = [{ name: "Contact", to: "/contact" }, { name: "Home", to: "/" }]

const Layout = ({ children, template }) => (
  <Grid
    template={Template[0]}
    gridTemplateRows="10vh auto 20vh"
    minWidth="100vw"
    minHeight="100vh"
  >
    <Nav Link={Links} display="flex" />
    <Container>{children}</Container>
    <Footer bg="black" />
  </Grid>
)

export default Layout

import React from "react"
import { Container, Header } from "../elements"
import { Link } from "gatsby"

const Button = ({ name, to }) => (
  <Link to={to}>
    <Header.h3>{name}</Header.h3>
  </Link>
)

const Nav = props => (
  <Container {...props}>
    {props.links && props.links.map(link => <Button {...link} />)}
    <Container>
      {props.loggedIn ? (
        <Button name="Dash" to="/dash" />
      ) : (
        <Button name="Login" to="/login" />
      )}
    </Container>
  </Container>
)

export default Nav

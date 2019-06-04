import React from "react"
import { Container, Header,Button } from "../elements"


// const AuthContainer = styled(Container)`
//     position:absolute;
//     left:0;
// `


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

import { Container } from "unstated"

class AuthState extends Container {
  state = {
    loggedIn: false,
    role: null,
  }

  setLoggedIn(val) {
    this.setState({
      loggedIn: val,
    })
  }
}

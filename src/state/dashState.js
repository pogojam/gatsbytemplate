import { Container } from "unstated"

class DashState extends Container {
  state = {
    activeView: "home",
  }

  setView(val) {
    localStorage.setItem("Dash", val)

    this.setState({
      activeView: val,
    })
  }
}

// localStorage.getItem("Dash")

export default DashState

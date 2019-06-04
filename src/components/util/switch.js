import React from "react"
import { Subscribe } from "unstated"
import DashState from "../../state/dashState"

const Switch = props => (
  <Subscribe to={[DashState]}>
    {DashState =>
      props.Views.map(View => {
        if (View.name === DashState.state.activeView) {
          const Component = View.component

          return <Component {...props} />
        }
      })
    }
  </Subscribe>
)

export default Switch

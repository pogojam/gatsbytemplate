import { Provider } from "unstated"
import React from "react"

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

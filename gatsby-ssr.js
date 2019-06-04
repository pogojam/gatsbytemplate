import React from "react"
import { ApolloProvider } from "react-apollo"
import { ThemeProvider } from "styled-components"
import client from "./src/backend/setup/apolloClient"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={{ mode: "light" }}>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </ThemeProvider>
)

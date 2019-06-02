import React from "react"
import { ApolloProvider } from "react-apollo"
import { Provider } from "unstated"
import client from "./src/backend/setup/apolloClient"

export const wrapRootElement = ({ element }) => (
  <Provider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </Provider>
)

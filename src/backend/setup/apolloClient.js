const { ApolloClient } = require("apollo-client")
const { InMemoryCache } = require("apollo-cache-inmemory")
const { HttpLink } = require("apollo-link-http")
const fetch = require("isomorphic-fetch")

const httplink = new HttpLink({ uri: "/api", credentials: "include" })

console.log(ApolloClient)

const client = new ApolloClient({
  link: httplink,
  cache: new InMemoryCache(),
  fetch,
})

module.exports = client

const { ApolloServer } = require("apollo-server-express")
const Modules = require("../modules/")

const Models = require("../models")

const apollo = new ApolloServer({
  modules: [Modules.appModule],
  context: ({ req }) => {
    return {
      auth: req.user,
      models: Models,
    }
  },
})

module.exports = apollo

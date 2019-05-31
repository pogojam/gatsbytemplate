const {ApolloServer} = require('apollo-server-express')
const Modules = require('../modules/app')

const Models = require('../models')

console.log("modules",Modules,"Models",Models);


const apollo = new ApolloServer({
    modules:[Modules.app],
    context: ({ req }) => {
      return  {
          auth:req.user,
          models:Models
      }
  }
  })

module.exports = apollo
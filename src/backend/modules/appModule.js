const { GraphQLModule } = require("@graphql-modules/core")
const userModule = require("./userModule")

const appModule = new GraphQLModule({
  imports: [userModule],
})

module.exports = appModule

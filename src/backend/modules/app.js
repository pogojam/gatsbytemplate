const { GraphQLModule } = require("@graphql-modules/core")
const UserModule = require("./UserModule")

const AppModule = new GraphQLModule({
  imports: [UserModule],
})

module.exports = AppModule

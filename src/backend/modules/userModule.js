const { GraphQLModule } = require("@graphql-modules/core")
const DATE = require("graphql-iso-date")
const gql = require("graphql-tag")

const Resolvers = {
  DATE: DATE,
  Query: {
    getUser: (obj, data, { model, sessionID }) => model.getUser(sessionID),
  },
  Mutation: {
    makeUser: (obj, data, { models, auth }) => {
      new models.user({}).save().then(console.log("new user created"))
      return data
    },
    updateUser: (obj, data, { model, sessionID }) => {
      return model.updateUser(sessionID, data)
    },
  },
}

const UserModule = new GraphQLModule({
  typeDefs: gql`
    scalar DATE

    input UserInput {
      firstName: String
      lastName: String
      dob: DATE
      address: AddressInput
      apt: String
      state: String
      city: String
      zip: Int
      homePhone: String
      workPhone: String
      email: String
      facebookID: Int
      googleID: Int
      role: [String]
    }

    input AddressInput {
      apt: String
      state: String
      city: String
      zip: String
      street: String
    }

    type Mutation {
      makeUser(input: UserInput): User
      updateUser(input: UserInput): User
    }
    type Query {
      getUser(ID: String): User
    }
    type User {
      firstName: String
      lastName: String
      dob: DATE
      address: Address
      homePhone: String
      workPhone: String
      email: String
      facebookID: Int
      googleID: Int
      role: [String]
    }

    type Address {
      apt: String
      state: String
      city: String
      zip: String
      street: String
    }
  `,
  resolvers: Resolvers,
  context: ({ models, auth }, moduleSessionInfo) => {
    let id = null

    if (typeof auth !== "undefined") {
      id = auth.id
    }

    return {
      sessionID: id,
      model: models.user,
    }
  },
})

module.exports = UserModule

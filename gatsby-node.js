require("dotenv").config()
const { db, apollo } = require("./src/backend/setup/")
const setup = require("./src/backend/setup/")
const bodyParser = require("body-parser")
const cookieSession = require("cookie-session")
const passport = require("passport")
const routes = require("./src/backend/routes")

exports.onCreateDevServer = ({ app }) => {
  db.init()

  // Middleware

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(
    cookieSession({
      name: "session",
      keys: [process.env.SECRET_KEYS],
      // Cookie Options
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  app.use("/auth", routes.auth)
}

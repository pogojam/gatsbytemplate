const express = require("express")
const passport = require("passport")

const router = express.Router()

router.get("/login", (req, res) => {
  res.json("login")
})

router.get("/logout", async (req, res) => {
  res.clearCookie("session")
  res.clearCookie("session.sig")
  return res.redirect("/")
})

router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["user_gender", "email", "user_birthday"],
  })
)

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/Auth/UserRegistration",
    failureRedirect: "/Login",
  }),
  (req, res) => {
    res.json(req.user)
  }
)

module.exports = router

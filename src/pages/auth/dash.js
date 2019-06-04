import React from "react"
import Logo from "../../components/elements/images/logo"
import { Grid, Layout } from "../../components/elements"
import { Dash } from "../../components/blocks"
import Template from "../../templates/dashTemplate"
import Switch from "../../components/util/switch"

const NavTemplate = [[0], [1], [2], [3]]
const HomeTemplate = [[0, 0, 1, 1], [2, 2, 3, 3], [4, 4, 3, 3]]

const Nav = props => (
  <Grid {...props} template={NavTemplate}>
    <div>Home</div>
    <div>Events</div>
    <div>Contacts</div>
    <div>After Hours</div>
  </Grid>
)

const Home = props => (
  <Grid {...props} gridGap="2em" template={HomeTemplate}>
    <Dash.Box>Club Info</Dash.Box>
    <Dash.Box>Up Comming Events</Dash.Box>
    <Dash.Box>Contacts</Dash.Box>
    <Dash.Box>Shout Outs</Dash.Box>
  </Grid>
)

const Event = () => (
  <>
    <div>Event</div>
    <div>Onboarding</div>
  </>
)

const AfterHours = () => (
  <>
    <div>Details</div>
    <div>Sports</div>
    <div>Manag Spots</div>
  </>
)

// const Views = [
//   { name: "home", component: Home },
//   { name: "event", component: Event },
//   { name: "afterHours", component: AfterHours },
// ]

const Views = [
  { name: "home", component: Home },
  { name: "event", component: Event },
  { name: "afterHours", component: AfterHours },
]

const DashPage = () => (
  <Layout>
    <Grid gridGap="1em 2em" template={Template[0]}>
      <Dash.ProfileInfo bg="black" />
      <Nav bg="black" />
      <Switch Views={Views} />
    </Grid>
  </Layout>
)

export default DashPage

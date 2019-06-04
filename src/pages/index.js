import React from "react"
import { Link } from "gatsby"
import { Home } from "../templates/homeTemplate"
import Logo from '../components/elements/images/logo'
import {Container,Header,Button} from '../components/elements'
import Layout from "../components/elements/layout"
import SEO from "../components/blocks/seoBlock"
import {css} from 'styled-components'



const ContainerCSS = css`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    min-width:100%;
    min-height:100%;

  ${Header}${Button}${Container}{
      display:none;
  }


`


const IndexPage = () => (
  <Layout>
    <Container  p='10em' CSS={ContainerCSS} >
      <Logo  className='animated fadeIn delay-1s' />
  <Header className='animated fadeInUp' >Manage your contact unlike you have ever before</Header>
  <Button to={"/login"} name="enter" />
    <SEO title="Home" />
    </Container>
  </Layout>
)

export default IndexPage

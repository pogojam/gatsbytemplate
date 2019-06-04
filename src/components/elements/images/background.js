import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroudImage from 'gatsby-background-image'
import styled from 'styled-components'




const BackgroundStyles = {
  width:'100vw',
  height:'100vh',
  position:'fixed',
  zIndex:-1

}



const Image = (prop) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq:"img/galaxy_dark.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <BackgroudImage style={BackgroundStyles} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)



export default Image

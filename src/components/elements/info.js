import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:50vh;
align-items: center;
justify-content: center;
padding-left: 8em;
padding-right: 8em;
text-align:center;
`

const Heading = styled.h2`

`
const Text = styled.p`

`

export default class Info extends Component {

componentDidMount(){

  

}

  render() {
      const {heading,text}= this.props
    return (
      <Container ref={(el)=> this.container = el} >
        <Heading>{heading}</Heading>
        <hr/>
        <Text>{text}</Text>
      </Container>
    )
  }
}

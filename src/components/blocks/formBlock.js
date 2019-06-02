import styled, { css } from "styled-components"
import { Title, Button } from "../elements"
import React from "react"
import Formol, { Field } from "formol/lib/formol"
import {
  justifyContent,
  gridGap,
  space,
  maxWidth,
  minWidth,
  fontSize,
  color,
  alignItems,
  display,
  flexBasis,
} from "styled-system"
// const Title = styled.h2`

// `

const Input = styled.input`
  ${flexBasis}
  border-radius: 5px;
  border: #b7b5b587 solid 1px;
`

const Form = styled(Formol)`
  ${maxWidth}
  ${display}
  ${gridGap}
  ${space}
  ${justifyContent}
  ${minWidth}
  ${({ CSS }) => CSS}

/* display: flex;
  flex-direction: column; */
  background-color: #f7f6f6;  
  text-align: center;
  border-radius: 20px;
  height: 100%;
  flex-wrap:wrap;
  

`

const Split = styled.div``

const facebookCSS = css`
  background-color: blue;
`
const googleCSS = css`
  background-color: red;
`

const SocialButton = styled(Button)`
  ${({ social }) => {
    if (social === "facebook") {
      return facebookCSS
    }
    if (social === "google") {
      return googleCSS
    }
  }}
`

const FieldTitle = styled(Title)`
  white-space: nowrap;
  font-size: larger;
  ${space}
`

const SubContainer = styled.div`
${space}
${display}
${alignItems}
${({ CSS }) => CSS}

  text-align: left;
  & > * {
    display: inline-block;
  }

& > &.div{
    padding-left:1em;
}

`

// const Field = ({ title, value, onChange }) => (
//   <SubContainer pb=".7em" display="flex" alignItems="flex-end">
//     <FieldTitle m={0} pr={"10px"}>
//       {title}
//     </FieldTitle>{" "}
//     <Input
//       type="text"
//       flexBasis={"100%"}
//       onChange={() => onChange}
//       value={value}
//     />
//   </SubContainer>
// )

const FieldInput = styled(Field)`
  padding-right: 0.7em;
`

const ContainerMain = ({ children }) => (
  <Form minWidth={["100%", "0"]} p={["3em"]} m={["0", "3em"]}>
    {children}
  </Form>
)

Form.ContainerMain = ContainerMain
Form.SubContainer = SubContainer
Form.Title = Title
Form.Input = Input
Form.Split = Split
Form.Button = Button
Form.SocialButton = SocialButton
Form.Field = FieldInput

export default Form

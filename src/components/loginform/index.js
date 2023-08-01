import styled from "styled-components";

const LoginBox = styled.div `

  display: flex;
  background-color:#FFF6F8;
  flex-direction:column;
  border-radius: 20px;
  color: #6b5e62;
  text-align: center;
  align-items:center;
  padding:0;
  margin-top:11%;
  justify-content:center;
  margin-left:auto;
  margin-right:auto;
  height: 40%;
  width: 30%;
`

const LoginForm = styled.form `

widht:100%;

`

const FormDiv= styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-bottom: 10%;
widht:100%;
height:55%
`
const LoginTitle = styled.h2 `
color: #6b5e62;
  font-size: 24px;
  text-align: center;
  width: 100%;
  margin-bottom:30px;
  margin-top:0;
  `

const LoginLabels = styled.p`
color: #6b5e62;
  font-size: 18px;
  text-align: center;
  width: 100%;
  margin:5% 0%;
`
const LoginInputs = styled.input `
border: 1px solid #6B5E62;
background: transparent;
margin-top:0px;
border: 0.5px solid #6B5E62;
padding: 5px 3%;
border-radius: 5px;
width:100%;
color: #6B5E62;
font-size: 16px;
margin-bottom:;

&::placeholder {
        color: #6B5E62;
        font-size: 16px
}
`
const SubmitButton = styled.button `
background: #6b5e62;
font-size:16px;
color:white;
width:100%;
margin-top: 30px;
border-radius:10px;
height:40px;
border:none
`


function LoginContainer () {
    return (
        <LoginBox>
            <LoginForm>
                <FormDiv>
                <LoginLabels type="email">Email:</LoginLabels>
                <LoginInputs></LoginInputs>
                <LoginLabels type="password">Password:</LoginLabels>
                <LoginInputs></LoginInputs>               
                </FormDiv>
                <SubmitButton>Login</SubmitButton>
            </LoginForm>
        </LoginBox>
        
    )
}

export default LoginContainer
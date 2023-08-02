import styled from "styled-components";
import {PostUser} from "../../services/users"
import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';


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
margin: 30% 5% 5% 5%;
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
padding: 10px 3%;
border-radius: 5px;
width:100%;
color: #6B5E62;
font-size: 12px;
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
margin-top: 30%;
border-radius:5px;
height:30px;
border:none;
cursor:pointer
`
function SignUpContainer () {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
      
      event.preventDefault();
      const data = { name, email, password };     
      try {
        const  response = await PostUser(data);
        setName("");
        setEmail("");
        setPassword("");
        navigate("/")
        
      } catch(error) {
        if (error.response && error.response.status === 409) {
          alert("Email already exists")
        } else {
          console.log(error)
        }
      }
  }

    return (
        <LoginBox>
            <LoginForm onSubmit={handleSubmit}>
                <FormDiv>
                  <LoginLabels>Name</LoginLabels>
                  <LoginInputs type="name" value={name} onChange={(e) => setName(e.target.value)}></LoginInputs>
                  <LoginLabels>Email:</LoginLabels>
                  <LoginInputs type="email" value={email} onChange={(e) => setEmail(e.target.value)}></LoginInputs>
                  <LoginLabels>Password:</LoginLabels>
                  <LoginInputs type="password" value={password} onChange={(e) => setPassword(e.target.value)}></LoginInputs>   
                </FormDiv>
                  <SubmitButton  type="submit">SignUp :)</SubmitButton>            
            </LoginForm>
        </LoginBox>
        
    )
}
export default SignUpContainer
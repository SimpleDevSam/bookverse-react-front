import styled from "styled-components";

const Input = styled.input `order: 1px solid #6B5E62;
background: transparent;
border: 1px solid #6B5E62;
padding: 20px 140px;
border-radius: 50px;
width: 200px;
color: #6B5E62;
font-size: 16px;
margin-bottom: 30px;

&::placeholder {
        color: #6B5E62;
        font-size: 16px;
}
`

export default Input
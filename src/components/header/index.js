import Logo from "../logo";
import HeaderOptions from "../header-options";
import HeaderIcons from "../header-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComponent = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  text-decoration:none;
  gap:20px
`;

const ModifiedLink = styled(Link)`
text-decoration: none;
`;

const DivTest = styled.div `
display:flex;
flex-direction:column;
align-content:center;
margin-top:0%
`

const UserField = styled.p `
margin:0.5%;
text-align:center;
color: #6b5e62
`

function Header() {

  const userName = localStorage.getItem('username')

  return (
    <HeaderComponent>
      <ModifiedLink to="/home">
        <Logo />
      </ModifiedLink>
      <HeaderOptions/>
      <DivTest>
        <HeaderIcons />
          <UserField>
            <strong>Olá,{userName}!</strong>
          </UserField>
      </DivTest>
    </HeaderComponent>
  );
}

export default Header;

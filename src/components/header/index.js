import Logo from "../logo";
import HeaderOptions from "../header-options";
import HeaderIcons from "../header-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logouticon from "../../images/shutdown.png"
import {useNavigate} from 'react-router-dom';

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
color: #6b5e62;
align-self:center
`

const LogOutComponent = styled.img`
  margin-right: 10px;
  height:30px;
  width:30px;
  align-self:center;
  margin-left:10px;
  cursor:pointer;
`;

function Header() {
  const navigate = useNavigate();
  const NavigateLogin = () => {
    navigate("/login")
  }

  const LogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
    localStorage.removeItem("email");
    NavigateLogin()
  }
  const userName = localStorage.getItem('username')

  return (
    <HeaderComponent>
      <ModifiedLink to="/home">
        <Logo />
      </ModifiedLink>
      <HeaderOptions/>
  
          <UserField>
            <strong>Olá,{userName}!</strong>
          </UserField>
 
      <LogOutComponent onClick={LogOut} src={logouticon}></LogOutComponent>
    </HeaderComponent>
  );
}

export default Header;

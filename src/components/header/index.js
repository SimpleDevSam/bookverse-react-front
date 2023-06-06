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
`;

const ModifiedLink = styled(Link)`
text-decoration: none;
`;

function Header() {
  return (
    <HeaderComponent>
      <ModifiedLink to="/">
        <Logo />
      </ModifiedLink>
      <HeaderOptions />
      <HeaderIcons />
    </HeaderComponent>
  );
}

export default Header;

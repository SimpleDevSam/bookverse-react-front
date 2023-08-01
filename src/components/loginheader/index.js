import Logo from "../logo";
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

function LoginHeader() {
  return (
    <HeaderComponent>
      <ModifiedLink to="/">
        <Logo />
      </ModifiedLink>
    </HeaderComponent>
  );
}

export default LoginHeader;

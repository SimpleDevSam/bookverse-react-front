import styled from "styled-components";
import LoginContainer from "../components/loginform";
import LoginHeader from "../components/loginheader";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd); 
`;

function Login() {
  return (
    <AppContainer>
      <LoginHeader/>
      <LoginContainer/>
    </AppContainer>
    
  );
}

export default Login;

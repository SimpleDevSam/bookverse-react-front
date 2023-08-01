import styled from "styled-components";
import SignUpContainer from "../components/signup";
import LoginHeader from "../components/loginheader";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd); 
`;

function SignUp() {
  return (
    <AppContainer>
      <LoginHeader/>
      <SignUpContainer/>
    </AppContainer>
    
  );
}

export default SignUp;

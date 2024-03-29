import styled from "styled-components";
import Category from "../components/category";
import Header from "../components/header/index";


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd); 
`;



function Categories() {
  return (
    <AppContainer>
      <Header />
      <Category/>
    </AppContainer>
    
  );
}

export default Categories;

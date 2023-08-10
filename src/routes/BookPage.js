import styled from "styled-components";
import Header from "../components/header/index";
import BookInfo from "../components/bookinfo";
import Comments from "../components/comments";
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd); 
`;

function BookPage() {
  return (
    <AppContainer>
      <Header />
      <BookInfo/>
      <Comments/>
    </AppContainer>
    
  );
}

export default BookPage;

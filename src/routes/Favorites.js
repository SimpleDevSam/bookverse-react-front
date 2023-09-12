import styled from "styled-components";
import { useEffect, useState } from "react";
import { deleteFavorite, getFavorites } from "../services/favorites";
import bookImg from "../images/livro.png";
import MinusImg from "../images/minus.png"
import Header from "../components/header/index";
import { useNavigate } from "react-router-dom";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd);
`;

const FavContainer = styled.div `
display:flex;
flex-direction:column;
align-items:center;
gap:15px;
height: 100%;
margin-bottom:100px;
`


const Title = styled.h2`
  color: #6B5E62;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

const NoFavoritesText = styled.p`
  color: #6B5E62;
  font-size: 16px;
  text-align: center;
`;

const ResultsContainer = styled.div`
  display: flex;
  background-color:#FFF6F8;
  flex-direction:column;
  border-radius: 20px;
  color: #6b5e62;
  text-align: center;
  align-items:center;
  padding: 10px 0;
  margin-top:1%;
  height: 100%;
  width: 50%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6b5e62;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  text-align: center;
  padding: 0 100px;
  border-bottom: 1px solid #6b5e62;
  p {
    width: 250px;
    color: #6B5E62;
    margin-right:20%;
  }
  &:hover {
    font-weight: bold;
  }
`;

const BookImage=styled.img`
width: 100px;

`

const MinusImage = styled.img `
width:60px;
height:60px;
padding-left:40%;
cursor: pointer;
`

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate()

  function NavigateToBook(bookId) {
    navigate(`../book/${bookId}`)
  }

  async function fetchFavorites() {
    const userKey = localStorage.getItem('userid');
    const APIfavorites = await getFavorites(userKey);
    setFavorites(APIfavorites);
  }

  async function removeFavorite(id) {
    await deleteFavorite(id)
    await fetchFavorites()
    alert(`Book with id:${id} was deleted!`);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);
  return (
    <AppContainer>
      <Header />
      <FavContainer>
        <Title>Your favorite books:</Title>
        <ResultsContainer>
          {favorites.length
            ? favorites.map((favorite) => (
                <Result >
                  <div>
                    <BookImage src={`/bookimages/img${favorite.bookid}.jpg`} />
                    <p onClick={() => NavigateToBook(favorite.bookid)}>{favorite.name}</p>
                  </div>  
                  <MinusImage src={MinusImg}  onClick={()=> removeFavorite(favorite.id)} />
                </Result>
              ))
            : <NoFavoritesText>You don't have any favorite books yet :/ </NoFavoritesText>}
        </ResultsContainer>
      </FavContainer>
    </AppContainer>
  );
}

export default Favorites;

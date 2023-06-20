import styled from "styled-components";
import { useEffect, useState } from "react";
import { deleteFavorite, getFavorites } from "../services/favorites";
import bookImg from "../images/livro.png";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd);
`;

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #6B5E62;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid #6B5E62;
  }
`;
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

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    const APIfavorites = await getFavorites();
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
      <div>
        <Title>Your favorite books:</Title>
        <ResultContainer>
          {favorites.length
            ? favorites.map((favorite) => (
                <Result onClick={()=> removeFavorite(favorite.id)}>
                  <p>{favorite.name}</p>
                  <img src={bookImg} />
                </Result>
              ))
            : <NoFavoritesText>You don't have any favorite books yet :/ </NoFavoritesText>}
        </ResultContainer>
      </div>
    </AppContainer>
  );
}

export default Favorites;

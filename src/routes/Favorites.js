import styled from "styled-components";
import { useEffect, useState } from "react";
import { getFavorites } from "../services/favorites";
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
  margin: 20px 0;
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

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    const APIfavorites = await getFavorites();
    setFavorites(APIfavorites);
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
                <Result>
                  <p>{favorite.name}</p>
                  <img src={bookImg} />
                </Result>
              ))
            : null}
        </ResultContainer>
      </div>
    </AppContainer>
  );
}

export default Favorites;

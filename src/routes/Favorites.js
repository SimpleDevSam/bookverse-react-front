import styled from "styled-components";
import { useEffect , useState } from "react";
import { getFavorites } from "../services/favorites";


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd); 
`;

function Favorites() {
  const [favorites,setFavorites] = useState([])

async function fetchFavorites() {
  const APIfavorites = await getFavorites()
  setFavorites(APIfavorites)
}

  useEffect(()=> {
    fetchFavorites ()
  }, [])

  return (
    <AppContainer>
      {favorites.map (favorite => (
      <p>{favorite.name}</p>
      ) )}
    </AppContainer>
    
  );
}

export default Favorites;

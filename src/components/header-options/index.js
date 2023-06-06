import styled from "styled-components";
import { Link } from "react-router-dom";

const textOptions = ["Categorys", "Favorites", "Shelf"];

const HeaderOptionsComponent = styled.ul`
  display: flex;
  text-decoration: none;
`;
const HeaderOptionComponent = styled.li`
  font-size: 16px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  text-decoration: none;
`;

const ModifiedLink = styled(Link)`
  text-decoration: none;
`;

function HeaderOptions() {
  return (
    <HeaderOptionsComponent>
      {textOptions.map((text) => (
        <ModifiedLink to={`/${text.toLowerCase()}`}>
          <HeaderOptionComponent>
            <p>{text}</p>
          </HeaderOptionComponent>
        </ModifiedLink>
      ))}
    </HeaderOptionsComponent>
  );
}

export default HeaderOptions;

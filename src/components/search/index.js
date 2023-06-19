import styled from "styled-components";
import Input from "../input";
import { useState } from "react";
import { useEffect } from "react";
import { getBooks } from "../../services/books";
import { postFavorite } from "../../services/favorites";

const SearchComponent = styled.section`
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd);
  color: #6b5e62;
  text-align: center;
  padding: 85px 0;
  height: 350px;
  width: 100%;
`;

const ResultsContainer = styled.div`
  display: flex;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd);
  flex-direction:column;
  color: #6b5e62;
  text-align: center;
  padding: 20px 0;
  height: 200px;
  width: 100%;
  overflow: scroll;
`;

const Title = styled.h2`
  color: #6b5e62;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Result = styled.div`
  display: flex;
  background-image: linear-gradient(90deg, #c9f0ff, #cfdfdd);
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height:100px;
  cursor: pointer;
  p {
    width: 200px;
  }
  &:hover {
    border: 1px solid #6b5e62;
  }
`;

function Search() {
  const [searchedBook, setSearchedBook] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksAPI = await getBooks();
    setBooks(booksAPI);
  }

  async function insertFavorite(id) {
    try {
      await postFavorite(id);
      alert(`Book with id:${id} was inserted!`);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(`Error: Book with id:${id} already exists!`);
      } else {
        alert("An error occurred while inserting the book.");
      }
    }
  }
  return (
    <SearchComponent>
      <Title>Let's get started?</Title>
      <Subtitle>Find your book at our shelf</Subtitle>

      <Input
        placeholder="Type down your next book"
        onBlur={(event) => {
          const inputText = event.target.value;
          console.log(inputText + inputText.length)
          const result = books.filter((book) =>
            book.name.includes(inputText.toString())
          );
          setSearchedBook(result);
        }}
      />
      <ResultsContainer>
        {searchedBook.map((favorite) => (
          <Result onClick={() => insertFavorite(favorite.id)}>
            <p>{favorite.name}</p>
          </Result>
        ))}
      </ResultsContainer>
    </SearchComponent>
  );
}
export default Search;

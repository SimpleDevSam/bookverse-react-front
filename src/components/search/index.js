import styled from "styled-components";
import Input from "../input";
import { useState } from "react";
import { useEffect } from "react";
import { getBooks } from "../../services/books";
import { postFavorite } from "../../services/favorites";
import bookImg from "../../images/livro.png"
import PlusImg from "../../images/plus.png"

const SearchComponent = styled.section`
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd);
  display: flex;
  gap:0px;
  flex-direction:column;
  align-items:center;
  color: #6b5e62;
  text-align: center;
  padding: 85px 0;
  height: 500px;
  width: 100%;
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

const Title = styled.h2`
  color: #6b5e62;
  font-size: 36px;
  text-align: center;
  width: 100%;
  margin:0px;
`;
const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Result = styled.div`
  display: flex;
  color:#6b5e62;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height:150px;
  width:90%;
  border-bottom: 1px solid #6b5e62;
  p {
    width: 200px;
  }
  &:hover {
    font-weight: bold;
  }

  
`;
const PlusImage = styled.img `
width:35px;
height=35px;
margin-left:20%;
cursor: pointer;
`

function Search() {
  const [searchedBook, setSearchedBook] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksAPI = await getBooks();
    const sortedBooks = booksAPI.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setBooks(sortedBooks);
    setSearchedBook(sortedBooks);
  }

  async function insertFavorite(id) {
    try {
      await postFavorite(id);
      alert(`Book with id:${id} was inserted!`);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(`Error: Book with id:${id} is already in favorites :)`);
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
          <Result>
            <img width={70} height={80} src={bookImg} alt="plusimg" />
            <p>{favorite.name}</p>
            <PlusImage width={35} height={35} src={PlusImg}  onClick={() => insertFavorite(favorite.id)} alt="minusimg" />
          </Result>
        ))}
      </ResultsContainer>
    </SearchComponent>
  );
}
export default Search;

import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { getBooks } from "../../services/books";
import { postFavorite } from "../../services/favorites";
import bookImg from "../../images/livro.png"

const CatComponent = styled.section`
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd);
  color: #6b5e62;
  text-align: center;
  padding: 20px 0;
  height: 100%;
  width: 100%;
`;



const Title = styled.h2`
  color: #6b5e62;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Title2 = styled.h2`
  color: #6b5e62;
  font-size: 20px;
  text-align: center;
  width: 100%;
  background-color:#ffffff;
  padding : 10px 0px
`;


const Cat = styled.div `
padding:0px;
margin:0px;
justify-content: center;
align-items: center;
display: flex;
flex-direction:column
`

const ResultsContainer = styled.div`
  display: flex;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd);
  justify-content:center;
  flex-direction:row;
  color: #6b5e62;
  text-align: center;
  gap:20px;
  padding: 20px 0;
  height: 150px;
  width: 100%;
  overflow: scroll;
`;

const Result = styled.div`
  display: flex;
  background-color:#EFEFF0;
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

function Category() {
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
        alert(`Error: Book with id:${id} is already in favorites :)`);
      } else {
        alert("An error occurred while inserting the book.");
      }
    }
  }

  const uniqueCategories = [...new Set(books.map((book) => book.category))];

  return (
    <CatComponent>
      <Title>Explore some categories:</Title>
      {uniqueCategories.map((category)=> (
        <Cat>
          <Title2>{category}</Title2>
          <ResultsContainer>
          {books.filter((book)=> book.category === category ).map((book) => (
          <Result onClick={() => insertFavorite(book.id)}>
            <p>{book.name}</p>
            <img width={70} height={80} src={`/bookimages/img${book.bookid}.jpg`} />
          </Result>
          
        ))}
        </ResultsContainer>
        </Cat>
      ))}

      
      
    </CatComponent>
  );
}
export default Category;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../services/books";
import styled from "styled-components";
import BookImg from "../../images/bookimages/img1.jpg"

const UserField = styled.p`
  margin: 0.5%;
  text-align: center;
  color: #6b5e62;
`;
const BookDiv = styled.div`
  margin-top:5%;
  display: flex;
  width: 100%;
  justify-content: center;
  gap:5px;
`;

const InfoDiv = styled.div `
  margin-top: 0,
  display: flex;
  flex-direction:column;
  width: 70%;
  height:100%
  justify-content: center;
  gap:5px;
  align-items:top
`

const AuthorCateg = styled.div `
display:flex;
flex-direction:column;
margin-bottom:5%;
height:20%
`

const TitleText = styled.h1`
font-size:30px;
margin-bottom:0px
`

const BookImage = styled.img `
magin:10%
`

function BookInfo() {
  const {id} = useParams();
  const [book, setBook] = useState(null);

  async function fetchBook() {
    console.log("Getbook with id"+id)

    const book = await getBook(id);
    const name = book.name

    console.log(name)
    console.log("GeetBooks finalized | Book below:")
    console.log(book);

    setBook(book);
  }


  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <BookDiv>
      <BookImage src={BookImg}></BookImage>
      <InfoDiv>
      <TitleText>{book ? <UserField>{book.name}</UserField> : 'Loading...'}</TitleText>
      <AuthorCateg>
        <UserField>{book ? <UserField><strong>Author:</strong> {book.author}</UserField> : 'Loading...'}</UserField>
        <UserField>{book ? <UserField><strong>Category:</strong>  {book.category}</UserField> : 'Loading...'}</UserField>
      </AuthorCateg>
        <UserField>{book ? <UserField>{book.abstract}</UserField> : 'Loading...'}</UserField>
      </InfoDiv>
    </BookDiv> 
  );
}

export default BookInfo;

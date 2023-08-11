import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../services/books";
import { InsertComment } from "../../services/comments";
import styled from "styled-components";
import BookImg from "../../images/bookimages/img1.jpg"

const TextField = styled.p`
  margin: 0.5%;
  text-align: center;
  color: #6b5e62;
`;
const BookDiv = styled.div`
  margin-top:5%;
  margin-bottom:5%;
  display: flex;
  width: 100%;
  justify-content: center;
  gap:5px;
`;

const InfoDiv = styled.div `
  display: grid;
  flex-direction:column;
  width: 70%;
  height:100%;
  justify-content: space-between;
  gap:5px;
  align-items:top
`

const AddCommentDiv = styled.div `
  margin-top: 7%;
  display: flex;
  flex-direction:row;
  width: auto;
  height:100px;
  justify-content: center;
  gap:5px;
  align-items:center;
`


const CommentInputArea = styled.textarea`
  width: 100%;        /* Takes up 100% of its container's width */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;   /* Allows users to resize textarea vertically */
`

const SendCommentButton = styled.button `
background: #6b5e62;
font-size:16px;
color:white;
width:100px;
border-radius:10px;
height:40px;
border:none;
cursor:pointer
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
  const [comment, setComment] = useState('');

  function CommentHandle (event) {
    setComment(event.target.value)
    console.log(event.target.value)
  }
  
  async function SendComment () {
    try {
      const userid = localStorage.getItem('userid')
      const bookid = id
      const content = comment
      const isactive = true

      const commentObject = {
        userid:userid,
        bookid:bookid,
        content:content,
        isactive:isactive
      }
      await InsertComment(id,commentObject );
      alert('Comment sent!');
      setComment('')
    } catch(error) {
      alert("Failed to send comment, Please try again :)")
      setComment('')
    }
  }

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
      <TitleText>{book ? <TextField>{book.name}</TextField> : 'Loading...'}</TitleText>
      <AuthorCateg>
        <TextField>{book ? <TextField><strong>Author:</strong> {book.author}</TextField> : 'Loading...'}</TextField>
        <TextField>{book ? <TextField><strong>Category:</strong>  {book.category}</TextField> : 'Loading...'}</TextField>
      </AuthorCateg>
        <TextField>{book ? <TextField>{book.abstract}</TextField> : 'Loading...'}</TextField>
        <AddCommentDiv>
          <TextField >Share your thoughts:</TextField>
          <CommentInputArea onBlur={CommentHandle} rows="4" cols="50" placeholder="Enter your comment here..."></CommentInputArea>
          <SendCommentButton onClick={SendComment}>Send</SendCommentButton>
        </AddCommentDiv>
      </InfoDiv>
    </BookDiv> 
  );
}

export default BookInfo;

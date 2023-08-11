import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getComments } from "../../services/comments";

const CommentsTitle = styled.p`
  margin: 0.5%;
  text-align: center;
  color: #6b5e62;
  font-size:23px
`;
const CommentDiv = styled.div`
  display: flex;
  flex-direction:column;
  height:auto;
  width: 100%;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd); 
  align-items: center;
  justify-content: center;
`;

const Comment2ndDiv = styled.div`
  display: flex;
  flex-direction:column;
  height:auto;
  width: 60%;
  align-items: center;
  justify-content: center;
`;


const Comment = styled.div `
  margin-top: px;
  display:flex;
  flex-direction: row;
  width: 100%;
  height:80px;
  justify-content: start ;
  padding-left:20%;
  padding-right:%;
  gap:5%;
  align-items:top;
`

const AuthorCateg = styled.div `
display:flex;
flex-direction:column;
margin-bottom:5%;
height:20%
`

const UserName = styled.h1`
font-size:15px;
margin-bottom:0px;
color: #6b5e62

`
const CommentContent = styled.p `
font-size:12px;
color: #6b5e62
`

function Comments() {
  const {id} = useParams();
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    console.log("GetComments of book with id:"+id)
    const comments = await getComments(id);
    console.log(comments)
    setComments(comments);
  }
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <CommentDiv>
      <Comment2ndDiv>
        <CommentsTitle><strong>See what the community thinks about this book!</strong></CommentsTitle>
        {comments.length
              ? comments.map((comment) => (
                  <Comment>  
                    <UserName>{comment.user.name}</UserName>
                    <CommentContent>{comment.content}</CommentContent>
                  </Comment>  
                ))
              : <p>There aren't comments to this book :( </p>}  
      
      </Comment2ndDiv>
    </CommentDiv>
        
  );
}

export default Comments;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getComments } from "../../services/comments";

const UserField = styled.p`
  margin: 0.5%;
  text-align: center;
  color: #6b5e62;
`;
const CommentDiv = styled.div`
  display: flex;
  flex-direction:column;
  height:auto;
  width: 100%;
  justify-content: center;
`;

const Comment = styled.div `
  margin-top: px;
  display:flex;
  flex-direction: row;
  width: 100%;
  height:80px;
  justify-content: left;
  gap:5px;
  align-items:top;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd); 
`

const AuthorCateg = styled.div `
display:flex;
flex-direction:column;
margin-bottom:5%;
height:20%
`

const UserName = styled.h1`
font-size:15px;
margin-bottom:0px
`
const CommentContent = styled.p `
font-size:12px;
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
      <UserField>See what the community thinks about this book!</UserField>
      {comments.length
            ? comments.map((comment) => (
                <Comment>  
                   <UserName>{comment.user.name}</UserName>
                  <CommentContent>{comment.content}</CommentContent>
                </Comment>  
              ))
            : <p>You don't have any favorite books yet :/ </p>}  
    
    </CommentDiv>
        
  );
}

export default Comments;

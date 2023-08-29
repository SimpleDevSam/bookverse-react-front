import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DeleteComment, getComments } from "../../services/comments";

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
  padding-right:;
  align-items:center;
`

const AuthorCateg = styled.div `
display:flex;
flex-direction:column;
margin-bottom:5%;
height:20%
`

const UserName = styled.h1`
font-size:15px;
margin-right:5%;
color: #6b5e62;
width:50px

`
const CommentContent = styled.p `
font-size:12px;
color: #6b5e62;
margin-right:10%;
`

const DeleteCommentButton = styled.button `
background: #E6553F;
font-size:8px;
color:white;
width:50px;
border-radius:10px;
height:15px;
border:none;
cursor:pointer;
align-self:center
`

const EditCommentButton = styled.button `
background: #EAAB00;
font-size:8px;
color:white;
width:50px;
border-radius:10px;
height:15px;
border:none;
cursor:pointer;
align-self:center
`

const CommentInputArea = styled.textarea`
  width: 100%;        /* Takes up 100% of its container's width */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;   /* Allows users to resize textarea vertically */
`

function Comments() {
  const {id} = useParams();
  const [comments, setComments] = useState([]);

  async function HandleDelete (id) {
    console.log(id)
    await DeleteComment(id)
    alert ("Comment deleted :)")
    await fetchComments()
    
  }

  /*async function ChangeComment (comment) {
    const change = {content:}
    await 
  }*/

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
                    <DeleteCommentButton onClick={()=>HandleDelete(comment.id)}>Delete</DeleteCommentButton>
                    <EditCommentButton /*onClick={()=>HandleDelete(comment.id)}*/>Edit</EditCommentButton>
                  </Comment>  
                ))
              : <p>There aren't comments to this book :( </p>}  
      
      </Comment2ndDiv>
    </CommentDiv>
        
  );
}

export default Comments;

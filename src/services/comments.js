import axios from "axios";

const commentsAPI = axios.create({ baseURL: "http://localhost:8000/comments" });

async function getComments(id) {
  const response = await commentsAPI.get(`/${id}`);
  return response.data;
}

async function InsertComment(id, comment) {
  await commentsAPI.post(`/${id}`, comment);
}

// async function getBook(id) {
//     const response = await booksAPI.get(`/${id}`)
//     return response.data
// }

async function DeleteComment(id) {
  await commentsAPI.delete(`/${id}`);
}

async function PatchComment(id) {
    await commentsAPI.patch(`/${id}`)
}

export { getComments, InsertComment, DeleteComment, PatchComment };

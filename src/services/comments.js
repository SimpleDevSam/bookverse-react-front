import axios from "axios"

const commentsAPI = axios.create({baseURL:"http://localhost:8000/comments"})

 async function getComments(id) {
    const response = await commentsAPI.get(`/${id}`)
    return response.data
}

// async function getBook(id) {
//     const response = await booksAPI.get(`/${id}`)
//     return response.data
// }



export {
    getComments
}
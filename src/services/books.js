import axios from "axios"

const booksAPI = axios.create({baseURL:"http://35.247.212.57:8000/books"})

 async function getBooks() {
    const response = await booksAPI.get('/')
    return response.data
}

export {
    getBooks
}
import axios from "axios"

const usersAPI = axios.create({baseURL:"http://localhost:8000/user"})

 async function postUser(data) {
    const response = await usersAPI.post('/',data)
    return response.data
}

export {
    postUser
}
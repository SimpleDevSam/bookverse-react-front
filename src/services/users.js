import axios from "axios"

const usersAPI = axios.create({baseURL:"http://localhost:8000/user"})

 async function PostUser(data) {
    const response = await usersAPI.post('/',data)
    return response.data
}

async function GetAllUsers() {
    const response = await usersAPI.get('/')
    return response.data
}

export {
    PostUser,
    GetAllUsers
}
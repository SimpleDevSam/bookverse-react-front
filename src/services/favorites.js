import axios from "axios"

const favAPI = axios.create({baseURL:"http://localhost:8000/favorites"})

 async function getFavorites() {
    const response = await favAPI.get('/')
    return response.data
}

export {
    getFavorites
}
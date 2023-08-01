import axios from "axios"

const favAPI = axios.create({baseURL:"http://localhost:8000/favorites"})

 async function getFavorites() {
    const response = await favAPI.get('/')
    return response.data
}

async function postFavorite (id) {
    await favAPI.post(`/${id}`)
}

async function deleteFavorite (id) {
    await favAPI.delete(`/${id}`)
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite
}
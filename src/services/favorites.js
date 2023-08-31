import axios from "axios"

const favAPI = axios.create({baseURL:"http://localhost:8000/favorites"})

 async function  getFavorites(userid) {
    const response = await favAPI.get(`/${userid}`);
    return response.data;
}

async function  getAllFavorites(bookid) {
    const body = {"id":bookid};
    console.log(body);
    const response = await favAPI.get(`/`,{params:{id:bookid}});
    console.log(response);
    return response.data;
}

async function postFavorite (id,userId) { 
    const body = {userid: userId}
    await favAPI.post(`/${id}`,body)
}

async function deleteFavorite (id) {
    await favAPI.delete(`/${id}`);
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite,
    getAllFavorites
}
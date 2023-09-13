import axios from 'axios'

export const Axios = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

const KEY = '461a93408c0ff23103fc861400a3bc03'

export default {
    GetTrending: `/trending/all/week?api_key=${KEY}&language=en-US`,
    GetTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
    GetActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
    GetComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
    GetHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
    GetRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
    GetNetflixOriginals: `/discover/tv?api_key=${KEY}&with_networks=213`,
    GetDocumentaries: `/discover/movie?api_key=${KEY}&with_genres=99`,
};
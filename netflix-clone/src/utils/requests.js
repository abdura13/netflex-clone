const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discovar/tv?api_key=${API_KEY}&with_networks=231`,
    feachTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    feachComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    feachHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    feachRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    feachDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    feachTvshow:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;

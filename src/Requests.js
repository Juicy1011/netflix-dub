// Typically we would store in {process.env.Api_KEY}
const API_KEY= '0b8c537f293dad8f1f4759b4bbb5bb67';

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`, 
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&`,
    fetchNowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=&{API_KEY}&`
};

export default requests;
import React, {useState, useEffect } from 'react'
import axios from 'axios';
import "./Banner.css";
import requests from './Requests';


function Banner() {
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const request = await axios.get(requests.fetchNetflixOriginals);
          const randomIndex = Math.floor(Math.random() * request.data.results.length);
          setMovie(request.data.results[randomIndex]);
        } catch (error) {
          console.error('Error fetching Netflix Originals:', error);
        }
      }
      
      fetchData();
    }, []);  // Empty dependency array to run only once on mount
  
    console.log(movie);
  

    function truncate(string, n) {
        return string?.length>n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path
        }")`,
        backgroundPosition:"center center",
        
    }}>
    
    <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My list</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}

        </h1>
    </div>
    <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner;
import React, {useState, useEffect } from 'react'
import axios from 'axios';
import "./Banner.css";
import requests from './Requests';


function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect (() => {
        async function fetchData () {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results [
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, )
    console.log(movie);

    function truncate(string, n) {
        return string?.length>n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header className='banner' style={{
        backgroundImage:'url("https://playbackonline.ca/wp/wp-content/uploads/2020/05/Screen-Shot-2020-05-04-at-1.41.10-PM.png")',
        backgroundPosition:"center center",
    }}>
    
    <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>

        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My list</button>
        </div>
        <h1 className="banner_description">{truncate('This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description', 150)}

        </h1>
    </div>
    <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner;
import React from 'react'
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';

function HomeScreen() {
  return (
    <div className="HomeScreen">
       <Nav />

       
       <Banner />
      < Row 
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />
      < Row 
      title='Trending Now'
      fetchUrl={requests.fetchTrending}/>
      < Row 
      title='Top Rated'
      fetchUrl={requests.fetchTopRated}/>
      < Row 
      title='Action Movies'
      fetchUrl={requests.fetchActionMovies}/>
      < Row 
      title='Comedy Movies'
      fetchUrl={requests.fetchComedyMovies}/>
      < Row 
      title='Horror Movies'
      fetchUrl={requests.fetchHorrorMovies}/>
      < Row 
      title='Romance Movies'
      fetchUrl={requests.fetchRomanceMovies}/>
      < Row 
      title='Documentaries Movies'
      fetchUrl={requests.fetchDocumentaries}/>



    </div>
  )
}

export default HomeScreen
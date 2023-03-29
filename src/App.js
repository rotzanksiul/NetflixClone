
// Main body of the App

import React from 'react';
import './App.css';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import News from './News';
import requests from './requests';
import Row from './Row';


const App = ()=>{
  return (
    <div className="app">
      <Navbar></Navbar>
    <Banner></Banner>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isPosterRow={true} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <News></News>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <News></News>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    <Footer></Footer>
    </div>
  );
}

export default App;

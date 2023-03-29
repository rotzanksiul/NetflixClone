import React, { useState, useEffect} from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css"


const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isPosterRow}) => {

    const [movies, setMovies] = useState([]);  
    
   useEffect(()=>{


    //Async function to get data using axios 
    async function fetchData(){
       
        const request = await axios.get(fetchUrl)

        setMovies(request.data.results)

        return request
        
    }
        
   

   // Calling the asybc function
    fetchData();

   },[fetchUrl])


  




    return ( 
        <div className="row">
            <h2>{title}</h2>

        {/* using optional chaining to get posters and backdrops */}       
            <div className="row-posters">
                {movies.map((movie)=>(
                    <img className={`row-poster ${isPosterRow && 'row-posterLarge'}`}
                    key={movie.id} 
                    src={`${base_url}${ isPosterRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} />
                ))}
            </div>
           
        </div>

        

     );
}
 
export default Row ;



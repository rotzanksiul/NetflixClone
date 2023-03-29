import { useEffect, useState } from "react";
import axios from "./axios";
import requests from './requests';
import "./Banner.css"




// Getting banner Data picture
const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                // To get a random number between the 20 movies 
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );

            return request;

        }

        fetchData();

    }, [])


    // Avoid the overview text to be too large
    const truncate = (str, n)=>{
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }


    return (

         // getting background image
        <header className="banner"
            style={{
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
           )`
            }}

        >


            <div className="banner-content">

                <h1 className="title">
                    {/*Using optional chainig to get the movie title or name in case one is not available */}

                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>

                <h1 className="banner-description">
                    {truncate(movie?.overview, 150)}
                </h1>

            </div>

            {/*the give the banner bottom a fading effect*/}
            <div className="banner-fadeBottom"></div>

        </header>

    );
}

export default Banner;
import { useEffect, useState } from "react";
import axios from "./axios";
import requests from './requests';
import "./News.css"


const News = () => {

    const [movie, setMovie] = useState([]);


    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(requests.fetchTrending);

            setMovie(
                // To get a random number between the 20 movies 
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );

            return request;

        }

        fetchData();

    }, [])



    return (
        <div className="news"
            // getting background image
            style={{
                backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
       )`
            }}


        >

            <div className="news-content">

                <h1 className="title">
                    {/*Using optional chainig to get the movie title available */}

                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <button className="details">Details</button>
            </div>


        </div>
    );
}

export default News;
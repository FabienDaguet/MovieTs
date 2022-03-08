import React, { useState, useEffect } from "react";
import Axios from 'axios'
import MovieCard from "./MovieCard";


const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    const URL = "https://api.themoviedb.org/3"
    const REQUEST = "/discover/movie?sort_by=popularity.desc"
    const APIKEY = "&api_key=3d07ff060bc510e2d02c73f56db64a16"

    const getMovies = () => {
        Axios
            .get(URL + REQUEST + APIKEY)
            //.then(response => console.log(response.data.results))
            .then(response => setMovies(response.data.results))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        getMovies()
    }, []);
    return (
        <div className="movies-list">
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    {movies != null ?
                        movies.map((movie, index) =>
                            <MovieCard
                                key={movie.id}
                                {...movie}
                                onClick={() => console.log(movie)}
                            />
                        )
                        :
                        <p>En cours de chargement</p>
                    }
                </div>
            </div>
        </div>
    )

}

export default MoviesList
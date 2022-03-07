import React, { useState } from 'react'

const MovieSeacrh = () => {

  const handleSearchTermChange = (e) => {
    setSeacrhTerm(e.target.value);
  };

  const [searchTerm, setSeacrhTerm] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  const fetchMovies = (MovieName) => {

    const URL = "https://api.themoviedb.org/3";
    const REQUEST = "/search/movie?";
    const APIKEY = "api_key=3d07ff060bc510e2d02c73f56db64a16";
    const QUERY = `&query=${MovieName}`;
    const searchUrl = (URL + REQUEST + APIKEY + QUERY);

    fetch(searchUrl)
    .then(response => response.json())
    //.then(result => console.log(result.results))
    .then(result => setResultSearch(result.results))
    .catch(error => console.log(error));

  }

  const moviesItems = resultSearch.map((moviesResult, id) => {
    return (
      <div key={moviesResult.id}>
          <img src={`https://image.tmdb.org/t/p/original/${moviesResult.poster_path}`} alt={`affiche ${moviesResult.title}`}/>
          <h2>{moviesResult.title}</h2>
        </div>
    )
  })

  return (
    <div>
        <h1>Films</h1>
        Recherche : <input type="text" onChange={handleSearchTermChange}/>
        <button className="form-button" type="submit" onClick={() => fetchMovies(searchTerm)}>recherche</button>
        {moviesItems}
    </div>
  )
}

export default MovieSeacrh
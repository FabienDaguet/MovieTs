import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import MovieCard from '../MovieCard';
import { useNavigate } from 'react-router-dom';

const SearchTest = ({ setSelectedMovie, search, isAuth }) => {

  let navigate = useNavigate();

  //STATE
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState('');

  //DECONSTRUCTION DE L'URL
  const URL = "https://api.themoviedb.org/3"
  const REQUEST = "/discover/movie?sort_by=popularity.desc&"
  const APIKEY = "api_key=3d07ff060bc510e2d02c73f56db64a16"

  //RECUPERE UNE LISTE DE FILM ENVOYEE PAR L'API ET EST EXECUTEE PAR LE USE EFFECT
  const getMovies = () => {
    Axios
      .get(URL + REQUEST + APIKEY)
      //.then(response => console.log(response.data.results))
      .then(response => setMovies(response.data.results))
      .catch(err => setErr(err))
  };

  //AFFICHE LA PAGE MOVIEDETAIL DU FILM SELECTIONNE
  const goToMovie = (movie) => {
    setSelectedMovie(movie);
    navigate(`/films/${movie.id}`)
  }
  
  useEffect(() => {
    getMovies()
  }, []);

  //RECUPERE LES FILMS EN FONCTION DE LA RECHERCHE EFFECTUEE
  useEffect(() => {
    const SearchURL = `https://api.themoviedb.org/3/search/movie?api_key=3d07ff060bc510e2d02c73f56db64a16&query=${search}`;
    Axios
      .get(SearchURL)
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error));
  }, [search]);

 
  //PERMET D4AFFICHER LES FILMS SEULEMENT SI CONNECTE
  const renderSwitch = () => {
    switch (isAuth) {
      //Si connecté j'affiche les films
      case true: 
        return (
          movies != null ?
            movies.map((movie, index) => {
              return (
                <MovieCard
                  key={movie.id}
                  {...movie}
                  onClick={() => goToMovie(movie)}
                />
              )
            }
            )
            :
            <p>Chargement...</p>
        )
        break;
      //Si non connecté j'affihe une demande de co
      default:
        return (
          <div>
            <p>non</p>
          </div>
        )
        break;
    }
  };

  return (
    <div>
      <div className="movies-list">
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {renderSwitch()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchTest
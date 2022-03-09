import React from 'react'

const MovieDetail = (props) => {
  return (
    <div className='container'>
      <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 g-3 d-flex justify-content-center'>
        <div className='col'>
          <div className='card shadow-sm'>
            <img className='bd-placeholder-img card-img-top' src={`https://image.tmdb.org/t/p/original/${props.selectedMovie.poster_path}`} alt={`affiche ${props.title}`} />
            <div className='card-body'>
              <h4 className='card-title'>{props.selectedMovie.title}</h4>
              <p className='card-text'>{props.selectedMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;

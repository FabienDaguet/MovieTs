import React from 'react'

const MovieDetail = (props) => {
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1'>
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

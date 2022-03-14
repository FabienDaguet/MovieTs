import React from 'react'

const MovieCard = (props) => {
    return (
        <div className='col' onClick={props.onClick}>
            <div className='card shadow-sm'>
                <img className='bd-placeholder-img card-img-top' src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt={`affiche ${props.title}`}/>
                <div className='card-body'>
                    <h4 className='card-title'>{props.title}</h4>
                    <p className='card-text text-truncate'>{props.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
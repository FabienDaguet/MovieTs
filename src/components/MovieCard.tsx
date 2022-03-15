import * as React from 'react'

type CardProps = {
    goTo: () => void
    onClick: () => void
    poster_path: string
    title: string
    overview: string
}

const MovieCard: React.FC<CardProps> = (props : CardProps) => {
    return (
        <div className='col'>
            <div className='card shadow-sm'>
                <img className='bd-placeholder-img card-img-top' src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt={`affiche ${props.title}`} onClick={props.goTo}/>
                <div className='card-body'>
                    <h4 className='card-title'>{props.title}</h4>
                    <p className='card-text text-truncate'>{props.overview}</p>
                </div>
            </div>
            <button className='w-100 btn btn-lg btn-danger mt-4' onClick={props.onClick}>Delete</button>
        </div>
    )
}

export default MovieCard
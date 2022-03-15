import * as React from 'react'

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: any;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
}

type DetailProps = {
  selectedMovie: IMovie | null
}

const MovieDetail: React.FC<DetailProps> = (props: DetailProps) => {
  return (
    <div className='container'>
      <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 g-3 d-flex justify-content-center'>
        <div className='col'>
          <div className='card shadow-sm'>
            <img className='bd-placeholder-img card-img-top' src={`https://image.tmdb.org/t/p/original/${props.selectedMovie?.poster_path}`} alt={`affiche ${props.selectedMovie?.title}`} />
            <div className='card-body'>
              <h4 className='card-title'>{props.selectedMovie?.title}</h4>
              <p className='card-text'>{props.selectedMovie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;

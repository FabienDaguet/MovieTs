import * as React from 'react'
import Axios from 'axios';
import MovieCard from './MovieCard';
import DeniedAcces from './DeniedAcces';
import { useNavigate } from 'react-router-dom';

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

type ListProps =  {
    setSelectedMovie: (state : IMovie) => void
    search: string
    isAuth: boolean
}

const MoviesList: React.FC<ListProps> = ({ setSelectedMovie, search, isAuth } : ListProps) => {

    let navigate = useNavigate();

    //STATE
    const [movies, setMovies] = React.useState<IMovie[] | null>(null);
    const [err, setErr] = React.useState('');

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
    const goToMovie = (movie: IMovie) => {
        setSelectedMovie(movie);
        navigate(`/films/${movie.id}`)
    };

    React.useEffect(() => {
        getMovies()
    }, []);

    const deleteMovieById = (movieIdToDelete: number) => {
        const updateMovies = movies?.filter(movie => movie.id != movieIdToDelete)
        if (updateMovies != null) {
            setMovies(updateMovies);
        };
        
    };

    //RECUPERE LES FILMS EN FONCTION DE LA RECHERCHE EFFECTUEE
    React.useEffect(() => {
        const SearchURL = `https://api.themoviedb.org/3/search/movie?api_key=3d07ff060bc510e2d02c73f56db64a16&query=${search}`;
        Axios
            .get(SearchURL)
            .then(response => setMovies(response.data.results))
            .catch(error => setErr(error));
    }, [search]);


    //PERMET D4AFFICHER LES FILMS SEULEMENT SI CONNECTE
    const renderSwitch = () => {
        switch (isAuth) {
            //Si connecté j'affiche les films
            case true:
                return (
                    movies != null ?
                        movies.map((movie: IMovie, index:number) => {
                            return (
                                <MovieCard
                                    key={movie.id}
                                    {...movie}
                                    goTo={() => goToMovie(movie)}
                                    onClick={() => deleteMovieById(movie.id)}
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
                        <DeniedAcces />
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

export default MoviesList
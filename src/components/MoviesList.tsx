import * as React from 'react'
import Axios from 'axios';
import MovieCard from './MovieCard';
import DeniedAcces from './DeniedAcces';
import { useNavigate } from 'react-router-dom';
import { GlobalContext, IContext } from './context/Context';
import {IMovie} from './interface/IMovies'

type ListProps =  {
    setSelectedMovie: (state : IMovie) => void
    search: string
    isAuth: boolean
}

const MoviesList: React.FC<ListProps> = ({ setSelectedMovie, search, isAuth } : ListProps) => {

    let navigate = useNavigate();

    const {store,setStore} = React.useContext(GlobalContext) as IContext;

    //STATE
            //const [movies, setMovies] = React.useState<IMovie[] | null>(null) les films sont set dans le context
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
            .then(response => setStore({...store, movies: response.data.results}))
            .catch(err => setErr(err))
    };

    //AFFICHE LES FILMS AU CHARGEMENT DE LA PAGE
    React.useEffect(() => {
        getMovies()
    }, []);

    //AFFICHE LA PAGE MOVIEDETAIL DU FILM SELECTIONNE
    const goToMovie = (movie: IMovie) => {
        setSelectedMovie(movie);
        navigate(`/films/${movie.id}`)
    };

    //SUPPRIME UN FILM VIA UN FILTRE SUR SON ID ET AFFICHE TOUS LES AUTRES
    const deleteMovieById = (movieIdToDelete: number) => {
        const updateMovies = store.movies?.filter(movie => movie.id != movieIdToDelete)
        if (updateMovies != null) {
            setStore({...store, movies: updateMovies})
        };
        
    };

    //RECUPERE LES FILMS EN FONCTION DE LA RECHERCHE EFFECTUEE
    React.useEffect(() => {
        const SearchURL = `https://api.themoviedb.org/3/search/movie?api_key=3d07ff060bc510e2d02c73f56db64a16&query=${search}`;
        Axios
            .get(SearchURL)
            .then(response => setStore({...store, movies: response.data.results}))
            .catch(error => setErr(error));
    }, [search]);


    //PERMET D4AFFICHER LES FILMS SEULEMENT SI CONNECTE
    const renderSwitch = () => {
        switch (isAuth) {
            //Si connecté j'affiche les films
            case true:
                return (
                    store.movies != null ?
                        store.movies.map((movie: IMovie, index:number) => {
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
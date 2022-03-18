import * as React from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TextInput, { AreaInput } from "./TextInput";
import { config } from './Index';

const MovieAdd: React.FC = () => {

    let navigate = useNavigate()

    const [newMovie, setNewMovie] = React.useState({
        title: '',
        overview: '',
        release_date: '',
        poster_path:'',
    })
    const [err, setErr] = React.useState<string>()
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name;
        const value = event.target.value;
        setNewMovie({...newMovie, [key]: value })
    };

    const handleChangeArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const key = event.target.name;
        const value = event.target.value;
        setNewMovie({...newMovie, [key]: value })
    };

    const submit = () => {
        Axios
            .post('https://api-ri7.herokuapp.com/api/movies', newMovie, config)
            //console.log("user =>", user);
            .then(res => {
                if (res.status == 200) {
                    //navigate("/")
                    console.log(res)
                };
            }
            )
            .catch(err => setErr("Une erreur est survenue"))
    };

    return (
        <>
            <div className='text-center input-body'>
                <div className='form-signin'>
                    <form className="form">
                        <TextInput
                            type="text"
                            label="Affiche"
                            name="poster_path"
                            className="form-control mb-6 col-5"
                            id="floatingInputPoster"
                            placeholder="Dupont"
                            value={newMovie.poster_path}
                            action={handleChange}
                        />
                        <TextInput
                            type="text"
                            label="Titre"
                            name="title"
                            className="form-control mb-6 col-5"
                            id="floatingInputTitle"
                            placeholder="Dupont"
                            value={newMovie.title}
                            action={handleChange}
                        />
                        <TextInput
                            type="date"
                            label="Date de sortie"
                            name="release_date"
                            className="form-control mb-6 col-5"
                            id="floatingInputDate"
                            placeholder="Dupont"
                            value={newMovie.release_date}
                            action={handleChange}
                        />
                        <AreaInput
                            type="text"
                            label="Description"
                            name="overview"
                            className="form-control mb-6 col-5"
                            id="floatingInputOverview"
                            placeholder="Dupont"
                            value={newMovie.overview}
                            action={handleChangeArea}
                        />
                        <button className='w-100 btn btn-lg btn-success mt-4' type='submit' onClick={submit}>Ajouter</button>
                        {/* <button className='w-100 btn btn-lg btn-primary mt-4' onClick={navigate("/films")} >Retour</button> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default MovieAdd
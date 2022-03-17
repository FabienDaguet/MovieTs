import * as React from 'react'
import TextInput from "./TextInput";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {GlobalContext, IContext} from './context/Context'
import { token } from './profile/Profile';

type IndexProps = {
    setIsAuth: (isAuth : boolean) => void;
    isAuth: boolean
}

export const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};

const Index: React.FC<IndexProps> = ({setIsAuth, isAuth} : IndexProps) => {

    const {store, setStore} = React.useContext(GlobalContext) as IContext;

    let navigate = useNavigate();

    const [user, setUser] = React.useState({
        email: '',
        password: ''
    });

    const [error, setError] = React.useState<string | null>(null)

    const getMyProfile = () => {
        Axios
            .get('https://api-ri7.herokuapp.com/api/users/profile', config)
            .then(res => setStore({...store, user: res.data}))
            .catch(err => console.log(err))
    }


    //ON VERIFIE LES IDENTIFS, SI OK ON REDIRIGE SUR FILMS
    const submit = (event: any) => {
        event.preventDefault();
        Axios
        .post('https://api-ri7.herokuapp.com/api/users/login', user)
        //.then(res => console.log(res))
        .then(response => {
            if(response.data?.token != null){
                sessionStorage.setItem( 'token', response.data.token)
                setIsAuth(true)
                getMyProfile();
                
            }
        })
        .catch(error => setError("une erreur est survenue"))
    }

    React.useEffect(() => {
        if(isAuth && store.user != null) {
            navigate("/films")
        }
    },[isAuth, store.user])

    const register = () => {
        navigate("/register")
    }

    return (

        <main className='text-center input-body'>
            <div className='form-signin'>
                <p>{error}</p>
                <form className="form">
                    <TextInput
                        type="text"
                        label="login"
                        name="login"
                        className="form-control mb-2" 
                        id="floatingInput"
                        placeholder="exemple@mail.com"
                        value={user.email}
                        action={(event : React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, email: event.target.value })}
                    />
                    <TextInput
                        type="password"
                        label="Mot de passe"
                        name="password"
                        className="form-control mb-2" 
                        id="floatingPassword"
                        placeholder="Mot de passe"                 
                        value={user.password}
                        action={(event : React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: event.target.value })}
                    />
                    <button className='w-100 btn btn-lg btn-success mt-4' type='submit' onClick={submit}>Connexion</button>
                    <button className='w-100 btn btn-lg btn-primary mt-4' onClick={register}>Register</button>
                </form>
            </div>
        </main>

    )
}

export default Index
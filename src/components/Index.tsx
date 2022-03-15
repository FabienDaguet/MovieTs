import * as React from 'react'
import TextInput from "./TextInput";
import { useNavigate } from 'react-router-dom';

type IndexProps = {
    setIsAuth: (isAuth : boolean) => void;
}

const Index: React.FC<IndexProps> = ({setIsAuth} : IndexProps) => {

    let navigate = useNavigate();

    const [user, setUser] = React.useState({
        email: '',
        password: ''
    });

    //ON VERIFIE LES IDENTIFS, SI OK ON REDIRIGE SUR FILMS
    const submit = () => {
        //console.log(user);
        const isLogged = user.email === 'admin' && user.password === 'password';
        if (isLogged) {
            setIsAuth(true)
            navigate("/films") 
        }
    }

    const register = () => {
        navigate("/register")
    }

    return (

        <main className='text-center input-body'>
            <div className='form-signin'>
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
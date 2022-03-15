import * as React from 'react'
import TextInput from "./TextInput";
import { useNavigate } from 'react-router-dom';

interface IRegister  {
    name: string,
    firstName: string,
    email: string,
    password: string,
}

const Register = () => {

    let navigate = useNavigate();
    const goToIndex = () => {
        navigate("/");
    };

    const [user, setUser] = React.useState<IRegister>({ 
        name: '',
        firstName: '',
        email: '',
        password: '',
    });

    const submit = () => {
        //console.log(user);
        const isLogged = user.email === 'admin' && user.password === 'password';
        if (isLogged) {
            navigate("/films") 
        }
    }

    return (

        <main className='text-center input-body'>
            <div className='form-register'>
                <form className="form">
                    <div className='d-flex justify-content-between'>
                        <TextInput
                            type="text"
                            label="Nom"
                            name="Nom"
                            className="form-controlRegister form-control mb-2 "
                            id="floatingInputName"
                            placeholder="Dupont"
                            value={user.name}
                            action={(event : React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, name: event.target.value })}
                        />
                        <TextInput
                            type="text"
                            label="Prénom"
                            name="Prénom"
                            className="form-control mb-2 form-controlRegister"
                            id="floatingInputFirstName"
                            placeholder="exemple@mail.com"
                            value={user.firstName}
                            action={(event : React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, firstName: event.target.value })}
                        />
                    </div>
                    
                    <TextInput
                        type="email"
                        label="email"
                        name="email"
                        className="form-control mb-2"
                        id="floatingInputEmail"
                        placeholder="Mot de passe"                 
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
                    {/* <TextInput
                        type="password"
                        label="Confirmer mot de passe"
                        name="password"
                        className="form-control mb-2"
                        id="floatingPasswordConfirm"
                        placeholder="Mot de passe"                 
                        value={user.password}
                        action={(event) => setUser({ ...user, password: event.target.value })}
                    /> */}
                    <button className='w-100 btn btn-lg btn-success mt-4' type='submit' onClick={submit}>S'enregistrer</button>
                    <button className='w-100 btn btn-lg btn-primary mt-4' onClick={() => goToIndex()}>Retour</button>
                </form>
            </div>
        </main>

    )
}

export default Register
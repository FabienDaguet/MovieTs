import React from 'react'
import TextInput from "./TextInput";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const submit = (e) => {
        //console.log(user);
        const isLogged = user.email === 'admin' && user.password === 'password';
        if (isLogged) {
            navigate("/films") 
        }
    }

    return (

        // Login form
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
                        action={(event) => setUser({ ...user, email: event.target.value })}
                    />
                    <TextInput
                        type="password"
                        label="Mot de passe"
                        name="password"
                        className="form-control mb-2" 
                        id="floatingPassword"
                        placeholder="Mot de passe"                 
                        value={user.password}
                        action={(event) => setUser({ ...user, password: event.target.value })}
                    />
                    <button className='w-100 btn btn-lg btn-success mt-4' type='submit' onClick={submit}>Connexion</button>
                    <button className='w-100 btn btn-lg btn-primary mt-4'>Register</button>
                </form>
            </div>
        </main>

    )
}

export default Index
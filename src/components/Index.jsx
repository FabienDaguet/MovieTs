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
        const isLogged = user.email == 'admin' && user.password == 'password';
        if (isLogged) {
            navigate("/films") 
        }
    }

    return (

        // Login form
        <div className='form-signin'>
            <form className="form">
                <TextInput
                    type="text"
                    label="login"
                    name="login"
                    id="floatingInput"
                    placeholder="exemple@mail.com"
                    value={user.email}
                    action={(event) => setUser({ ...user, email: event.target.value })}
                />
                <TextInput
                    type="text"
                    label="password"
                    name="password"
                    id="floatPassword"
                    placeholder="Password"                 
                    value={user.password}
                    action={(event) => setUser({ ...user, password: event.target.value })}
                />
                <button type='submit' onClick={submit}>Connexion</button>
                <button>Register</button>
        </form>
        </div>

    )
}

export default Index
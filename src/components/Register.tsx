import * as React from 'react'
import TextInput from "./TextInput";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

interface IRegister {
    lastname: string,
    firstname: string,
    email: string,
    password: string,
    //birthdate: Date | string | null,
    city: string,
    postalCode: string
    biography: string
}

const Register = () => {

    let navigate = useNavigate();
    const goToIndex = () => {
        navigate("/");
    };

    const [user, setUser] = React.useState<IRegister>({
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        //birthdate: null,
        city: '',
        postalCode: '',
        biography: '',
    });

    const [err, setErr] = React.useState<string | null>(null)
    /* const errorDisplay = () => {
        if(error != null){
            <p>{error}</p>
        }
    } */

    const submit = () => {
        Axios
            .post('https://api-ri7.herokuapp.com/api/users/register', user)
            //console.log("user =>", user);
            .then(res => {
                if (res.status == 200) {
                    navigate("/")
                }
            }
            )
            .catch(err => setErr("Une erreur est survenue"))
    }

    return (
        <>
            
            <main className='text-center input-body'>
                <div className='form-register'>
                    <form className="form">
                        <p>{err}</p>    
                        <div className='d-flex justify-content-between'>
                            <TextInput
                                type="text"
                                label="Nom"
                                name="Nom"
                                className="form-controlRegister form-control mb-2 "
                                id="floatingInputName"
                                placeholder="Dupont"
                                value={user.lastname}
                                action={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, lastname: event.target.value })}
                            />
                            <TextInput
                                type="text"
                                label="Prénom"
                                name="Prénom"
                                className="form-control mb-2 form-controlRegister"
                                id="floatingInputfirstname"
                                placeholder="exemple@mail.com"
                                value={user.firstname}
                                action={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, firstname: event.target.value })}
                            />
                        </div>

                        <div className='d-flex justify-content-between'>
                            <TextInput
                                type="text"
                                label="ville"
                                name="ville"
                                className="form-controlRegister form-control mb-2 "
                                id="floatingInputCity"
                                placeholder="Paris"
                                value={user.city}
                                action={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, city: event.target.value })}
                            />
                            <TextInput
                                type="text"
                                label="code postal"
                                name="code postal"
                                className="form-control mb-2 form-controlRegister"
                                id="floatingInputPostalCode"
                                placeholder="exemple@mail.com"
                                value={user.postalCode}
                                action={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, postalCode: event.target.value })}
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
                            action={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, email: event.target.value })}
                        />

                        <TextInput
                            type="password"
                            label="Mot de passe"
                            name="password"
                            className="form-control mb-2"
                            id="floatingPassword"
                            placeholder="Mot de passe"
                            value={user.password}
                            action={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: event.target.value })}
                        />
                        {/* <TextInput
                        type="date"
                        label="date de naissance"
                        name="birthDate"
                        className="form-control mb-2"
                        id="floatingPasswordConfirm"
                        placeholder="date de naissance"
                        value={user.birthdate}
                        action={(event) => setUser({ ...user, birthdate: event.target.value })}
                    /> */}

                        <TextInput
                            type="textarea"
                            label="biography"
                            name="biography"
                            className="form-control mb-2r"
                            id="floatingInputBiography"
                            placeholder="exemple@mail.com"
                            value={user.biography}
                            action={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, biography: event.target.value })}
                        />
                        <button className='w-100 btn btn-lg btn-success mt-4' type='submit' onClick={submit}>S'enregistrer</button>
                        <button className='w-100 btn btn-lg btn-primary mt-4' onClick={() => goToIndex()}>Retour</button>
                    </form>
                </div>
            </main>
        </>

    )
}

export default Register
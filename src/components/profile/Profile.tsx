import * as React from 'react'
import Axios from 'axios'
import TextInput from '../TextInput'
import {IProfile} from '../interface/IProfile'
import { GlobalContext, IContext } from '../context/Context'
import { config } from '../Index'

export const token = sessionStorage.getItem('token');

const Profile = () => {

    const {store,setStore} = React.useContext(GlobalContext) as IContext;

    const [isEditing, setIsEditing] = React.useState<boolean>(false);


    const updateProfile = () => {
        if(isEditing) {
            Axios
            .put('https://api-ri7.herokuapp.com/api/users/profile', store.user, config)
            .then(res => console.log("my update = ", res))
            .catch(err => console.log(err))
        }
        setIsEditing(!isEditing)
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (store.user != null) {
            const key = event.target.name;
            const value = event.target.value;
            setStore({...store, user:
                {...store.user, [key] : value}
            })
        }
    };

    return (
        <div className='container'>
            {store.user != null ?
                <>
                    {isEditing ?
                        <>
                            <div className='text-center'>
                                <div className='form-register'>
                                    <form className="form">
                                        <div className='justify-content-between d-flex'>
                                            <TextInput
                                                type="text"
                                                label="Nom"
                                                name="lastname"
                                                className="form-control mb-6 col-5"
                                                id="floatingInputName"
                                                placeholder="Dupont"
                                                value={store.user.lastname}
                                                action={handleChange}
                                            />
                                            <TextInput
                                                type="text"
                                                label="Prénom"
                                                name="firstname"
                                                className="form-control mb-2 col-5"
                                                id="floatingInputfirstname"
                                                placeholder="exemple@mail.com"
                                                value={store.user.firstname}
                                                action={handleChange}
                                            />
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <TextInput
                                                type="text"
                                                label="ville"
                                                name="city"
                                                className="form-control mb-2 "
                                                id="floatingInputCity"
                                                placeholder="Paris"
                                                value={store.user.city}
                                                action={handleChange}
                                            />
                                            <TextInput
                                                type="text"
                                                label="code postal"
                                                name="postalCode"
                                                className="form-control mb-2"
                                                id="floatingInputPostalCode"
                                                placeholder="exemple@mail.com"
                                                value={store.user.postalCode}
                                                action={handleChange}
                                            />
                                        </div>

                                        <TextInput
                                            type="email"
                                            label="email"
                                            name="email"
                                            className="form-control mb-2"
                                            id="floatingInputEmail"
                                            placeholder="Mot de passe"
                                            value={store.user.email}
                                            action={handleChange}
                                        />

                                        <TextInput
                                            type="password"
                                            label="Mot de passe"
                                            name="password"
                                            className="form-control mb-2"
                                            id="floatingPassword"
                                            placeholder="Mot de passe"
                                            value={store.user.password}
                                            action={handleChange}
                                        />
                                        {/* <TextInput
                                                type="date"
                                                label="date de naissance"
                                                name="birthDate"
                                                className="form-control mb-2"
                                                id="floatingPasswordConfirm"
                                                placeholder="date de naissance"
                                                value={store.user.birthdate}
                                                action={handleChange}
                                            /> */}

                                        <TextInput
                                            type="textarea"
                                            label="biography"
                                            name="biography"
                                            className="form-control mb-2r"
                                            id="floatingInputBiography"
                                            placeholder="exemple@mail.com"
                                            value={store.user.biography}
                                            action={handleChange}
                                        />
                                    </form>
                                </div>
                            </div>
                        </>

                    :

                        <>
                            <p>Nom: {store.user?.lastname}</p>
                            <p>Prénom: {store.user?.firstname}</p>
                            <p>Ville: {store.user?.city}</p>
                            <p>Ville: {store.user?.postalCode}</p>
                            <p>Email: {store.user?.email}</p>
                            <p>Description: {store.user?.biography}</p>
                        </>

                    }
                    <button className='w-100 btn btn-lg btn-success mt-4' type='submit' onClick={updateProfile}>Modifier</button>
                </>
                :
                <>
                    <p>Chargement en cours</p>
                </>
            }
        </div >
    )
}

export default Profile
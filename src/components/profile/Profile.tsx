import * as React from 'react'
import Axios from 'axios'
import TextInput from '../TextInput'

interface IProfile {
    avatar: string | null;
    biography: string;
    birthdate: Date | null;
    city: string;
    email: string;
    firstname: string;
    id: number;
    lastname: string;
    postalCode: string;
    password: string;
}

const Profile = () => {

    const [user, setUser] = React.useState<IProfile | null>(null)
    const [isEditing, setIsEditing] = React.useState<boolean>(false)
    const token = sessionStorage.getItem('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const getMyProfile = () => {
        Axios
            .get('https://api-ri7.herokuapp.com/api/users/profile', config)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getMyProfile();
    }, [])

    const updateProfile = () => {
        if(isEditing) {
            Axios
            .put('https://api-ri7.herokuapp.com/api/users/profile', user, config)
            .then(res => console.log("my update = ", res))
            .catch(err => console.log(err))
        }
        setIsEditing(!isEditing)
    }

    return (
        <div className='container'>
            {user != null ?
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
                                                name="Nom"
                                                className="form-control mb-6 col-5"
                                                id="floatingInputName"
                                                placeholder="Dupont"
                                                value={user.lastname}
                                                action={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, lastname: event.target.value })}
                                            />
                                            <TextInput
                                                type="text"
                                                label="Prénom"
                                                name="Prénom"
                                                className="form-control mb-2 col-5"
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
                                                className="form-control mb-2 "
                                                id="floatingInputCity"
                                                placeholder="Paris"
                                                value={user.city}
                                                action={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, city: event.target.value })}
                                            />
                                            <TextInput
                                                type="text"
                                                label="code postal"
                                                name="code postal"
                                                className="form-control mb-2"
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
                                    </form>
                                </div>
                            </div>
                        </>

                    :

                        <>
                            <p>Nom: {user?.lastname}</p>
                            <p>Prénom: {user?.firstname}</p>
                            <p>Ville: {user?.city}</p>
                            <p>Ville: {user?.postalCode}</p>
                            <p>Email: {user?.email}</p>
                            <p>Description: {user?.biography}</p>
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
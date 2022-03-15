import * as React from 'react'
import Axios from 'axios'

interface IProfile {
    avatar: string | null;
    biography: string | null;
    birthdate: Date | null;
    city: string;
    email: string;
    firstname: string;
    id: number;
    lastname: string;
    postalCode: number;
}

const Profile = () => {

    const [user, setUser] = React.useState<IProfile | null>(null)
    const token = sessionStorage.getItem('token')

    const getMyProfile = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        Axios
        .get('https://api-ri7.herokuapp.com/api/users/profile', config)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getMyProfile();
    },[])

    return (
        <div className='container'>
            {user != null ?
                <>
                    <p>Nom: {user?.lastname}</p>
                    <p>Prénom: {user?.firstname}</p>
                    <p>Ville: {user?.city}</p>
                    <p>Email: {user?.email}</p>
                    <p></p>
                </>
            :
                <>
                    <p>Chargement en cours</p>
                </>
            }
        </div>
    )
}

export default Profile
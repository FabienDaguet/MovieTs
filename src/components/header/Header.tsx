import * as React from 'react'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import {GlobalContext, IContext} from '../context/Context'


type HeaderProps = {
    setSearch : (state : string) => void
    isAuth : boolean
}

const Header: React.FC<HeaderProps> = ({ setSearch, isAuth } : HeaderProps) => {
    
    const {store, setStore} = React.useContext(GlobalContext) as IContext;

    const Changetheme = () => {
        console.log("theme");
        setStore({...store, theme: "dark"})
    }

    return (
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
            <div className='container-fluid'>
                <span className='navbar-brand'>MyMovies</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse"><span className="navbar-toggler-icon"></span></button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link to={'/films'} className="nav-link active">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/profile'} className="nav-link">Mon profil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/add'} className="nav-link">Ajouter un film</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">{store.theme}</span> <button onClick={Changetheme}>Changer</button>
                        </li>
                    </ul>
                    {isAuth != (false) ? 
                        <>
                            <span className="nav-link">{store.user?.firstname}</span>
                            <SearchBox placeholder="recherche" handleChange={(e : React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
                        </>
                    :
                        <div>
                            
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header
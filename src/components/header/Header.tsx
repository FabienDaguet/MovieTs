import * as React from 'react'
import SearchBox from './SearchBox'

type HeaderProps = {
    setSearch : (state : string) => void
    isAuth : boolean
}

const Header: React.FC<HeaderProps> = ({ setSearch, isAuth } : HeaderProps) => {

    return (
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
            <div className='container-fluid'>
                <span className='navbar-brand'>MyMovies</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse"><span className="navbar-toggler-icon"></span></button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    {isAuth != (false) ? 
                        <SearchBox placeholder="recherche" handleChange={(e : React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
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
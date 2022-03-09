import React from 'react'
import SearchBox from './SearchBox'

const Header = ({ setSearch }) => {

    return (
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
            <div className='container-fluid'>
                <span className='navbar-brand'>MyMovies</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse"><span class="navbar-toggler-icon"></span></button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link">Link</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <SearchBox placeholder="recherche" handleChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
        </nav>
    )
}

export default Header
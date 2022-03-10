import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Header'
import Index from './Index'
import MovieDetail from './MovieDetail'
import MoviesList from './MoviesList'
import Register from './Register'
//import SearchTest from './test/SearchTest'

const Router = () => {

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [search, setSearch] = useState('');
    const [isAuth, setIsAuth] = useState(false);

    return (
        <BrowserRouter>
            <Header setSearch={setSearch} isAuth={isAuth}/>
            <Routes>
                <Route path="/" element={<Index setIsAuth={setIsAuth}/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/films" element={<MoviesList
                                                    setSelectedMovie={setSelectedMovie} 
                                                    search={search} 
                                                    isAuth={isAuth}/>} 
                                                />
                <Route path="/films/:id" element={<MovieDetail selectedMovie={selectedMovie}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
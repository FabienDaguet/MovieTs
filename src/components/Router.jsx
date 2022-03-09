import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Header'
import Index from './Index'
import MovieDetail from './MovieDetail'
import MoviesList from './MoviesList'
import Register from './Register'

const Router = () => {

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [search, setSearch] = useState('');
    
    return (
        <BrowserRouter>
            <Header setSearch={setSearch}/>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/register" element={<Register />} />
                <Route path="/films" element={<MoviesList setSelectedMovie={setSelectedMovie} search={search}/>} />
                <Route path="/films/:id" element={<MovieDetail selectedMovie={selectedMovie}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
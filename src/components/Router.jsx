import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from './Index'
import MovieDetail from './MovieDetail'
import MovieSeacrh from './MovieSearch'
import MoviesList from './MoviesList'

const Router = () => {

    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/films" element={<MoviesList setSelectedMovie={setSelectedMovie}/>} />
                <Route path="/films/:id" element={<MovieDetail selectedMovie={selectedMovie}/>} />
                <Route path="/recherche" element={<MovieSeacrh />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
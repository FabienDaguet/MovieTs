import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from './Index'
import MovieDetail from './MovieDetail'
import MoviesCardContainer from './MoviesCardContainer'
import MovieSeacrh from './MovieSearch'
import MoviesList from './MoviesList'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/films" element={<MoviesList />} />
                <Route path="/detail" element={<MovieDetail />} />
                <Route path="/recherche" element={<MovieSeacrh />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
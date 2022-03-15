import * as React from 'react'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './header/Header'
import Index from './Index'
import MovieDetail from './MovieDetail'
import MoviesList from './MoviesList'
import Register from './Register'
//import SearchTest from './test/SearchTest'

interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: any;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number
}

const Router = () => {

    const [selectedMovie, setSelectedMovie] = React.useState<IMovie | null>(null);
    const [search, setSearch] = React.useState('');
    const [isAuth, setIsAuth] = React.useState(false);

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
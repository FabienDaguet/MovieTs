import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from './Index'
import MovieDetail from './MovieDetail'
import MovieSeacrh from './MovieSearch'

const Router = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/detail" element={<MovieDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
import Favoritos from 'Pages/Favoritos'
import Lista from 'Pages/Lista'
import Sobre from 'Pages/Sobre'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'

export default function Router() {
    return (
        <BrowserRouter>
            <Header >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/lista/animais' element={<Lista />} />
                    <Route path='/favoritos' element={<Favoritos />} />
                    <Route path='/sobre' element={<Sobre />} />
                </Routes>
            </Header>

            <Footer />
        </BrowserRouter>
    )
}

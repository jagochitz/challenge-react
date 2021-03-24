import './index.css'
import './Mobile.css'
import React from 'react'

import Header from './components/Header'
import Cellduplo from './components/Cellduplo'
import HowToWork from './components/HowToWork'
import EspacamentoMaior from './components/EspacamentoMaior'
import Explore from './components/Explore'
import Checkout from './components/Checkout'
import Download from './components/Download'
import Footer from './components/Footer'
import TituloHow from './components/TituloHow'

export default () => (
    <main className="app">
        <Header/>
        <Cellduplo/>
        <EspacamentoMaior/>
        <TituloHow/>
        <HowToWork/>
        <Explore/>
        <Checkout/>
        <Download/>
        <Footer/>
    </main>
    
)
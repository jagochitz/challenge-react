import './index.css'
import './Responsive.css'
import './Mobile.css'
import React from 'react'

import Header from './components/Header'
import Apresentacao from './components/Apresentacao'
import HowToWork from './components/HowToWork'
import EspacamentoMaior from './components/EspacamentoMaior'
import Explore from './components/Explore'
import Checkout from './components/Checkout'
import Download from './components/Download'
import Footer from './components/Footer'

export default () => (
    <main className="app">
        <Header/>
        <Apresentacao/>
        <EspacamentoMaior/>
        <HowToWork/>
        <Explore/>
        <Checkout/>
        <Download/>
        <Footer/>
    </main>
    
)
import React from 'react'
import './Header.css'
import Logo from '../images/Bella-Olonje-logo.png'

export default props => 
    <header>
    <section class="header-container">
    <div class="logo">
        <img src={Logo} alt="logo" />
    </div>
    <nav class="menu">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
    </nav>
    </section>
    </header>
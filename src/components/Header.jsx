import React from 'react'
import './Header.css'
import Logo from '../images/Bella-Olonje-logo.png'

export default props => 
    <header>
        <section className="header-container">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <nav className="menu">
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Faq</a>
                <a href="#">Contact</a>
            </nav>
        </section>
    </header>
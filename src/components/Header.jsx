import React from 'react'
import './Header.css'
import Logo from '../images/Bella-Olonje-logo.png'
import MenuMobile from '../images/menu-mobile.png'

export default props => 
    <header>
        <section className="header-container">
            <div className="logo">
                <img className="img-logo" src={Logo} alt="logo" />
                <div className="menu-mobile"><img id="mobile" src={MenuMobile} alt=""/></div>
                <div className="menu-mobile-itens">
                    <a href="#">Home</a>
                    <a href="#">Product</a>
                    <a href="#">Faq</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <nav className="menu">
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Faq</a>
                <a href="#">Contact</a>
            </nav>
        </section>
    </header>;


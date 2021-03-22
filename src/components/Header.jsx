import React from "react";
import "./Header.css";
import Logo from "../images/Bella-Olonje-logo.png";
import MenuMobile from "../images/menu-mobile.png";

export default (props) => (
  <header className="header-container">
      <div className="header">
        <div className="logo">
            <img className="img-logo" src={Logo} alt="logo" />
        </div>
        <div className="menu-mobile">
            <img id="mobile" src={MenuMobile} alt="" />
        </div>
        <nav className="menu-mobile-itens">
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
        </nav>
        <nav className="menu">
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Faq</a>
            <a id="ultimo" href="#">Contact</a>
        </nav>
      </div>
      <div className="break"></div>
      <div className="apres-content">
        <div className="text-content">
            <h3>Food app</h3>
            <div className="apres-titulo">
                <h1>Why stay hungry when</h1>
                <h1>you can order form Bella Onojie</h1>
            </div>
            <div className="apres-p">
                <h4>Download the bella onoje's food app now on</h4>
            </div>
        </div>
          <div className="buttons-apresentacao">
            <div className="buttons-apresentacao-item">
              <button>Playstore</button>
            </div>
            <div className="buttons-apresentacao-item">
              <button>App store</button>
            </div>
          </div>
      </div>
  </header>
);

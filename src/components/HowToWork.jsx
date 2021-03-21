import React from 'react'
import './HowToWork.css'
import CellLogin from '../images/Cell-login.png'

export default props => 
      <section className="how-to-work">
        <div className="tituloHow">
          <h2>How the app works</h2>
        </div>
        <div className="cell-login">
          <img src={CellLogin} alt="celular-login" />
        </div>
        <div className="create-account">
          <h3>Create an account</h3>
          <h1>Create/login to an existing account to get started</h1>
          <p>An account is created with your email and a desired password</p>
        </div>
      </section>
    
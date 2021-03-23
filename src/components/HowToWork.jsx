import React from 'react'
import './HowToWork.css'
import CellLogin from '../images/Cell-login.png'

export default props => 
      <section className="how-to-work">
        <div className="cell-login">
          <img src={CellLogin} alt="celular-login" />
        </div>
        <div className="create-account">
          <div className="create-text">
            <div className="create-h3">
              <h3>Create an account</h3>
            </div>
            <div className="create-h1">
              <h1>Create/login to an existing account to get started</h1>
            </div>
            <div className="create-h4">
              <h4>An account is created with your email <br/> and a desired password</h4>
            </div>
          </div>
        </div>
      </section>
    
import React from 'react'
import './Footer.css'
import FooterLogo from '../images/image-footer.png'
import Twitter from '../images/Twitter-vector.png'
import Fb from '../images/Fb-vector.png'
import Instagram from '../images/Instagram-vector.png'

export default (props) => (
    <div>
      <footer className="footer">
          <div className="footer-logo">
              <img src={FooterLogo} alt="footer logo"/>
          </div>
          <div className="sociais-medias">
              <div className="twitter">
                  <a href="#"><img src={Twitter} alt="twitter"/></a>
              </div>
              <div className="fb">
                  <a href="#"><img src={Fb} alt="Fb"/></a>
              </div>
              <div className="instagram">
                  <a href="#"><img src={Instagram} alt="Fb"/></a>
              </div>
          </div>
          <div className="copywright">
            <p>Copywright 2020 Bella Onojie.com</p>
          </div>
      </footer>

    </div>
  );
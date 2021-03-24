import React from "react";
import "./Checkout.css";
import CellCheckout from "../images/Cell-checkout.png";

export default (props) => (
  <div>
    <section className="checkout-main">
      <div className="cell-checkout">
        <img src={CellCheckout} alt="ceular-explore" />
      </div>
      <div className="checkout-content">
        <div className="checkout-text">
          <div className="checkout-h3">
            <h3>Checkout</h3>
          </div>
          <div className="checkout-h1">
            <h1>When you done Check out and get it delivered.</h1>
          </div>
          <div className="checkout-h4">
            <h4>When you done check out and get it delivered with ease.</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
);

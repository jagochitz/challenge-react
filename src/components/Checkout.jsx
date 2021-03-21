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
          <h3>Checkout</h3>
          <h1>When you done Check out and get it delivered.</h1>
          <h4>When you done check out and get it delivered with ease.</h4>
        </div>
      </div>
    </section>
  </div>
);

import React from "react";
import "./Explore.css";
import CellExplore from "../images/Cell-explore.png";

export default (props) => (
  <div>
    <section className="explore-main">
      <div className="explore-text">
        <h3>Explore varieties</h3>
        <h1>Shop for your favorites meal as e dey hot.</h1>
        <p>Shop for our favorite meals or drinks and enjoy while doing it.</p>
      </div>
      <div className="cell-explore">
        <img src={CellExplore} alt="ceular-explore" />
      </div>
    </section>
  </div>
);

import React from "react";
import "./Explore.css";
import CellExplore from "../images/Cell-explore.png";

export default (props) => (
  <div>
    <section className="explore-main">
      <div className="cell-explore">
        <img src={CellExplore} alt="ceular-explore" />
      </div>
      <div className="explore-content">
        <div className="explore-text">
          <h3>Explore varieties</h3>
          <h1>Shop for your favorites <br/> meal as e dey hot.</h1>
          <h4>Shop for our favorite meals or drinks <br/> and enjoy while doing it.</h4>
        </div>
      </div>
    </section>
  </div>
);

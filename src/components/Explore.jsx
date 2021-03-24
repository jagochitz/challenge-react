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
          <div className="explore-h3">
            <h3>Explore varieties</h3>
          </div>
          <div className="explore-h3-mobile">
            <h3>Explore while shopping</h3>
          </div>
          <div className="explore-h1">
            <h1>Shop for your favorites <br/> meal as e dey hot.</h1>
          </div>
          <div className="explore-h4">
            <h4>Shop for our favorite meals or drinks <br/> and enjoy while doing it.</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
);

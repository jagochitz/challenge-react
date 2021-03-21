import React from "react";
import "./Apresentacao.css";
import CellsMini from "../images/Cells-mini.png";

export default (props) => (
  <section className="app-apresentacao">
    <div className="apres-content">
      <h3>Food app</h3>
      <div className="apres-titulo">
        <h1>Why stay hungry when</h1>
        <h1>you can order form Bella Onojie</h1>
      </div>
      <div className="apres-p">
        <p>Download the bella onoje's food app now on</p>
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
    <div className="cells-mini">
      <img src={CellsMini} alt="" />
    </div>
  </section>
);

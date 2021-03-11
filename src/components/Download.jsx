import React from "react";
import "./Download.css";

export default (props) => (
  <div>
    <section className="download-main">
      <h1>Download the app now.</h1>
      <p className="p-desk">Available on your favorite store. Start your premium experience now</p>
      <p className="p-mobile">Most calendars are designed for teams</p>
      <div className="buttons-download">
        <div className="buttons-download-item buttom-desk">
          <button>Playstore</button>
        </div>
        <div className="buttons-download-item buttom-desk">
          <button>App store</button>
        </div>
        <div className="buttons-download-item buttom-mobile">
          <button>Buy now</button>
        </div>
        <div className="buttons-download-item buttom-mobile">
          <button>Try for free</button>
        </div>
      </div>
    </section>
  </div>
);

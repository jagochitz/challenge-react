import React from "react";
import "./Download.css";

export default (props) => (
  <div>
    <section className="download-main">
      <div className="download-content">
        <div className="download-text-content">
          <div className="download-title">
            <h2>Download the app now.</h2>
          </div>
          <div className="download-subtitle">
            <h4 className="p-desk">Available on your favorite store. Start your premium experience now</h4>
            <div className="p-mobile">
              <h4>Most calendars are designed for teams</h4>
            </div>
          </div>
        </div>
        <div className="buttons-download">
          <div className="buttons-download-item buttom-desk">
            <button>Playstore</button>
          </div>
          <div id="down-btn-ultimo" className="buttons-download-item buttom-desk">
            <button>App store</button>
          </div>
          <div className="buttons-download-item buttom-mobile">
            <button>
              <span>Buy now</span>
              </button>
          </div>
          <div id="try-ff" className="buttons-download-item buttom-mobile">
            <button>
              <span>Try for free</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

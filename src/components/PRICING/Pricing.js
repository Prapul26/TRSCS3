import React, { useState } from "react";
import "./Pricing.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { RxCross2 } from "react-icons/rx";
import { Trail, Standard, Basic } from "../../components/Data/PricingData";
import { Link } from "react-router-dom";
import Header from "../Heaader/Header";
const Pricing = () => {
  const [popup, setPopup] = useState(false);
  const popUp = () => {
    setPopup(!popup);
    console.log("Popup state:", popup);
  };

  return (
    <div>
      {popup && (
        <div className="popup">
          <div className="popmsg">
            <h2>Are you sure want to start with this package ?</h2>
            <RxCross2 onClick={popUp} />
          </div>
          <div className="paybutton">
            <button onClick={popUp}>Close</button>
            <Link to="/payment">
              <button>Yes</button>
            </Link>
          </div>
        </div>
      )}
      <div className="pricing-container">
        <Header />
        <Navbar />
        <div className="ph1">
          <div className="p1h1">
            <h1>Pricing</h1>
          </div>
        </div>
        <div className="pricing-holder">
          <div className="cal">
            <h1>Choose the Package</h1>
            <div className="pridiv"></div>
            <p>
              Discover the perfect plan for your needs with our flexible and
              affordable pricing packages. Whether you're an individual
              professional, a small business, or a growing enterprise, we have
              options tailored to suit you.
            </p>
          </div>
          <div className="pricing-details2">
            {Basic.map((item, index) => (
              <div key={index} className="pd2">
                <button>Basic</button>
                <h1>$60 - $80
                </h1>
                <h2>{item.days} Days Trail</h2>
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
                <div className="getb">
                  <button onClick={popUp}>GetStarted</button>
                </div>
              </div>
            ))}
            {Standard.map((item, index) => (
              <div key={index} className="pd3">
                <button>Standard</button>
                <h1>$120 - $150</h1>
                <h2>{item.days} Days Trail</h2>
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
                <div className="getb">
                  <button onClick={popUp}>GetStarted</button>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        <div className="pricingSearch">
          <div className="priceData">
            <h1>Subscribe to Newsletter</h1>
            <p>
              Subscribe to get update and information. Don't worry, we won't
              send spam!
            </p>
          </div>
          <div className="priceSearch">
            <div className="searchdiv">
              <input type="text" placeholder="Email" />
            </div>
            <div className="ppbutton">
              <button >Subscribe Here</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {popup && (
        <div className="popup">
          <p>
            Your popup content goes here. Make sure this element is styled
            correctly.
          </p>
        </div>
      )}{" "}
    </div>
  );
};
export default Pricing;

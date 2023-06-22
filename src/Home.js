import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="123456"
            title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses (Lean Guides with Scrum, Sprint, Kanban, DSDM, XP & Crystal)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="benwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.2}
            rating={4}
            image="https://m.media-amazon.com/images/I/61FJtVQh9bL._SL1200_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61uPbYJ3GvL._SY355_.jpg"
          />
          <Product
            id="254997852"
            title="CHIST Gamer PC (Intel Core i7 860 |DDR3 16GB Ram | 256GB SSD | 1TB HDD 7200 RPM | GT 730 4GB DDR5 Graphic Card |WiFi Adoptor"
            price={1345.99}
            rating={5}
            image="	https://m.media-amazon.com/images/I/71NNtewklIL._SY679_.jpg"
          />
          <Product
            id="549885"
            title="
          Ambrane Wireless Gaming Controller with Transparent Design, 2.4GHz Wireless Technology, Integrated Dual Intensity Motor, Illuminated Pad for PC - Windows"
            price={456}
            rating={5}
            image="https://m.media-amazon.com/images/I/711EqR0PGGL._SX679_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="85664"
            title="Radiant Electro 18.5 inches All in One Gamming Computer Set (Intel-Core i5 Processor/8 GB RAM DDR3/HDD 1 Tb /18.5) Monitor/120"
            price={4653.88}
            rating={5}
            image="	https://m.media-amazon.com/images/I/41I2PUW2MeL._SX450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

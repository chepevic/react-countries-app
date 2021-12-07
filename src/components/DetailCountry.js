import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const DetailCountry = ({ country }) => {
  //const [data] = country;

  useEffect(() => {
    console.log(country);
  }, [country]);
  return (
    <>
      <Header />
      {/* {country && (
        <div id="country" className="container">
          <div className="back">
            <Link to="/">
              {" "}
              <i className="fas fa-arrow-left"></i> Back
            </Link>
          </div>
          <div className="details">
            <div className="flag">
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div className="info">
              <h2>Country</h2>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default DetailCountry;

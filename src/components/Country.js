import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import CountriesContext from "../contexts/CountriesContext";

const Country = () => {
  const [, , bgColor, ,] = useContext(CountriesContext);
  const { name } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      const url = `https://restcountries.com/v2/name/${name}`;
      const resp = await fetch(url);
      const data = await resp.json();
      setCountry(data);
    };
    getCountry();
  }, [name]);

  return (
    <>
      <Header />
      <div className={bgColor ? `bgLight` : `bgDark`}>
        <div id="country">
          <div className={bgColor ? `back` : `backDark`}>
            <Link to="/">
              {" "}
              <i className="fas fa-arrow-left"></i> Back
            </Link>
          </div>
          {country?.map((data) => (
            <div className="details" key={data.flags.png}>
              <div className="flag">
                <img src={data.flags.svg} alt={data.name.common} />
              </div>
              <div className={bgColor ? `info` : `infoDark`}>
                <h2>{data.name.common}</h2>
                <div className="info_details">
                  <div>
                    <p>
                      <strong>Native Name: </strong>
                      {data.nativeName}
                    </p>
                    <p>
                      <strong>Population: </strong>
                      {parseInt(data.population).toFixed(2)}
                    </p>
                    <p>
                      <strong>Region: </strong>
                      {data.region}
                    </p>
                    <p>
                      <strong>Sub Region: </strong>
                      {data.subregion}
                    </p>
                    <p>
                      <strong>Capital: </strong>
                      {data.capital}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Top Level Domain: </strong>
                      {data.topLevelDomain}
                    </p>
                    <p>
                      <strong>Currencies: </strong>
                      {data?.currencies.map((currency) => currency.name + " ")}
                    </p>
                    <p>
                      <strong>Languages: </strong>
                      {data?.languages.map((language) => language.name + " ")}
                    </p>
                  </div>
                </div>

                <p>
                  <strong>Borders countries: </strong>

                  {data.borders?.map((borde) => (
                    <span
                      className={bgColor ? `border` : `borderDark`}
                      key={borde}
                    >
                      {borde}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Country;

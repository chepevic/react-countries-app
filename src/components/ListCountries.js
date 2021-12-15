import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../contexts/CountriesContext";

const ListCountries = () => {
  const data = useContext(CountriesContext);
  const [countries, , bgColor, , loading] = data;
  return (
    <>
      <section className={bgColor ? `bgLight` : `bgDark`}>
        {loading && (
          <h2
            className="container"
            style={{ textAlign: "center", marginTop: 40 }}
          >
            Loading Countries...
          </h2>
        )}
        <div id="countries" className="container">
          {countries.map((country) => (
            <Link to={`/country/${country.name}`} key={country.flags.png}>
              <div className={bgColor ? `country` : `countryDark`}>
                <img src={country.flags.svg} alt={country.name.common} />
                <h2>{country?.name}</h2>
                <p>
                  <strong>Population: </strong>
                  {parseFloat(country.population)}
                </p>
                <p>
                  <strong>Region: </strong>
                  {country.region}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {country.capital}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ListCountries;

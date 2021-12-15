import { useContext, useState } from "react";
import CountriesContext from "../contexts/CountriesContext";

const Search = () => {
  const data = useContext(CountriesContext);
  const [, setCountries, bgColor] = data;
  const [country, setCountry] = useState("");

  const getRegion = async (e) => {
    const region = parseInt(e.target.value);
    if (region === 0) {
      alert("Select a Region");
    } else {
      const region = e.target.value;
      const name_region = region;
      const url = "https://restcountries.com/v2/region/";
      const resp = await fetch(url + name_region);
      const countries = await resp.json();
      setCountries(countries);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://restcountries.com/v2/name/${country}`;
    const resp = await fetch(url);
    const searchCountry = await resp.json();
    if (searchCountry.length > 0) {
      setCountries(searchCountry);
    } else {
      alert("there is not result with your search");
      setCountry("");
    }
  };
  const handleInputChange = async (e) => {
    setCountry(e.target.value);
    const url = `https://restcountries.com/v2/name/${country}`;
    const resp = await fetch(url);
    const searchCountry = await resp.json();
    if (searchCountry.length > 0) {
      setCountries(searchCountry);
    }
  };

  return (
    <>
      <section className={bgColor ? `bgLight` : `bgDark`}>
        <div className="container" id="search">
          <div className={bgColor ? `country` : `countryDark`}>
            <form onSubmit={handleSubmit}>
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search for a country..."
                name="country"
                onChange={handleInputChange}
                value={country}
              />
            </form>
          </div>
          <div className={bgColor ? `region` : `regionDark`}>
            <select name="region" onChange={getRegion}>
              <option value="0">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

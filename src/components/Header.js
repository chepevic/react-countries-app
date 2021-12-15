import { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../contexts/CountriesContext";

//import { useState } from "react";

const Header = () => {
  const [, , bgColor, setBgColor] = useContext(CountriesContext);
  document.body.style.backgroundColor = `${bgColor ? "#fafafa" : "#202C37"}`;
  return (
    <header className={bgColor ? `header` : `headerDark`}>
      <div className="container content">
        <Link to="/home">
          <h2>Where is the world?</h2>
        </Link>
        <div className="darkMode" onClick={() => setBgColor(!bgColor)}>
          <i className={bgColor ? `far fa-moon` : `fas fa-sun`}></i>{" "}
          {bgColor ? <span>Dark mode</span> : <span>Clear mode</span>}
        </div>
      </div>
    </header>
  );
};
export default Header;

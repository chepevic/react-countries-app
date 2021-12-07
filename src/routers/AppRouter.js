import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "../components/Country";
import Home from "../components/Home";
import CountriesContext from "../contexts/CountriesContext";
import GetAllCountries from "../data/GetAllCountries";

const AppRouter = () => {
  const [countries, setCountries] = useState([]);
  const [bgColor, setBgColor] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetAllCountries().then((data) => {
      setCountries(data);
      setLoading(false);
    });
  }, []);
  return (
    <CountriesContext.Provider
      value={[countries, setCountries, bgColor, setBgColor, loading]}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="country/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </CountriesContext.Provider>
  );
};

export default AppRouter;

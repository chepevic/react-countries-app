import React from "react";
import Header from "./Header";
import Search from "./Search";
import ListCountries from "./ListCountries";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <ListCountries />
    </>
  );
};

export default Home;

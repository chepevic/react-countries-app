import { useState } from "react";

const useCountry = () => {
  const [countries, setCountries] = useState([]);

  return [countries, setCountries];
};

export default useCountry;

const GetRegion = async (region) => {
  try {
    const name_region = region;
    const url = "https://restcountries.com/v2/region/";
    const resp = await fetch(url + name_region);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default GetRegion;

import React, { useState,useEffect } from 'react'
function CountriesApp() {
     const [region, setRegion]=useState("0");
     const[paises, setPaises]=useState([]);
     const Region=(e)=>{
         setRegion(e.target.value);
     }
     useEffect(()=>{
        const getRegion=async()=>{
            if(region==="0"){
                console.log("No hay data que mostrar");
            }
            else{
                try {
                    const response= await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
                    const data=await response.json();
                    setPaises(data);
                } catch (error) {
                    console.error(error);              
                }
            }
        }
        getRegion();      
     },[region])
     
    return (
        <>
        <div className="container">
            <h1>Api Countries by Region</h1>
        <select name="region" id="region" onChange={Region}>
            <option value="0">Select Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
        </div>
        <div className="cards">
        {
            paises.map(pais=>(
            <div key={pais.numericCode} className="card">
                <img src={pais.flag} alt={pais.name}/>
                <h2>{pais.name}</h2>
                <p><strong>Population:</strong> {pais.population}</p>
                <p><strong>Capital:</strong> {pais.capital}</p>
            </div>
            ))
        }
        </div>          
        </>
    )
}
export default CountriesApp

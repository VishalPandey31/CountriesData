import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CardData({Country,Search}){

    const navigate=useNavigate();

   const SearchFilter =Country.filter((Country)=>
      Country.name.common.toLowerCase().includes(Search.toLowerCase())
   )

  
    return(
        <>

        <div  className="Main-Div">
                  {
            SearchFilter.map((country)=>{
                return(
              <div className="Card_Container"  onClick={() =>{navigate(`/${country.name.common}`, {state: {selectedCountry: country,allCountries: Country} })}}>
          
                 <img  src={`https://flags.restcountries.com/v5/w320/${country.cca2?.toLowerCase()}.png`} alt="" />
                  <h2>{country.name?.common}</h2>
                  <h3>Population: <span>{country.population?.toLocaleString()}</span></h3>
                  <h3>Region <span>{country.region}</span></h3>
                 <h3>Captial <span>{country.capital?.[0]}</span></h3>
    
                 
                 
           </div>)
            })
        }
        </div>

        
          
        </>
    )
}

export default CardData;
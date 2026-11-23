import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CardData({Country,Search,setCardDetails}){

    const navigate=useNavigate();

   const SearchFilter =Country.filter((Country)=>
      Country.name.common.toLowerCase().includes(Search.toLowerCase())
   )

  
    return(
        <>

        <div  className="Main-Div">
                  {
            SearchFilter.map((Country)=>{
                return(
              <div className="Card_Container"  onClick={() =>{navigate("/CardDetails",{state:Country})}}>
          
                 <img  src={`https://flags.restcountries.com/v5/w320/${Country.cca2.toLowerCase()}.png`} alt="" />
                  <h2>{Country.name?.common}</h2>
                  <h3>Population: <span>{Country.population?.toLocaleString()}</span></h3>
                  <h3>Region <span>{Country.region}</span></h3>
                 <h3>Captial <span>{Country.capital?.[0]}</span></h3>
    
                 
                 
           </div>)
            })
        }
        </div>

        
          
        </>
    )
}

export default CardData;
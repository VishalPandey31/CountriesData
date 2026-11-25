import Navbar from './Navbar'
import SearchBar from './SearchBar'
import  CardData from './CardData'
import { useState ,useEffect,} from 'react'
function HomeCard(){

     const [Country, setCountry] = useState([])
  const [Search, setSearch] =useState('');

//   const a=useContext(ThemeContext)
 
   useEffect(()=>{
fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
.then((res) =>res.json())
.then((data)=>{
    setCountry(data)
    console.log(data);
})
    },[])
    return (
        <>
        <Navbar/>
   <hr />
     <SearchBar setSearch={setSearch}/>
      <CardData Search={Search} Country={Country} />
         
        </>
    )
}

export default HomeCard;
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import  CardData from './CardData'
import { useState ,useEffect,} from 'react'
import ShimmerCard from './ShimmerCard';
import SelectMenu from './SelectMenu';

function HomeCard(){

     const [Country, setCountry] = useState([])
  const [Search, setSearch] =useState('');
const [loading, setLoading] = useState(true);
//   const a=useContext(ThemeContext)
 
   useEffect(()=>{
fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
.then((res) =>res.json())
.then((data)=>{
    setCountry(data)
    console.log(data);
    setLoading(false);
})


    },[])

    if(loading){
  return  <ShimmerCard/>
}
    return (
        <>
        <Navbar/>
        
      <hr />
     <SearchBar setSearch={setSearch}/>
     <SelectMenu setSearch={setSearch} />
    {
    loading ? <ShimmerCard/> : <CardData Search={Search} Country={Country}/>
    }
     
         
        </>
    )
}

export default HomeCard;
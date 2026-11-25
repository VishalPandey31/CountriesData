import './index.css'
import {useState} from 'react';
function Navbar(){

    const [dark,setdark]=useState(false);

      function  changeTheme(){
        if(dark){
            document.documentElement.setAttribute("data-theme","light")
            setdark(false)
      } else{
                    document.documentElement.setAttribute("data-theme","dark")
        setdark(true)
      }
    }
    return (
        <>
           <div className='Nav_Container'>
        <h2>Where is the world?</h2>
        <p onClick={changeTheme} className='darkMode'><span>{dark ? "☀️ Light Mode" : "🌙 Dark Mode"}</span></p>
        
         </div>
        
        </>
    )
}


export default Navbar;
import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import CardDetails from './CardDetails'
import HomeCard from './HomeCard'
import {ThemeContext} from './contexts/ThemeContext'

function App() {

    const [dark, setdark] = useState( localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            dark ? "dark" : "light"
        );
    }, [dark]);

  return (
    <>
      <ThemeContext.Provider value={ {dark, setdark }}>
              <Routes>
                    <Route path="/" element={<HomeCard/>}/>
                    <Route path="/:country" element={<CardDetails/>}/>     
                   
              </Routes>
      </ThemeContext.Provider>
    </>
  )
}
export default App;

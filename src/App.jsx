import { useState ,useEffect} from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from './CardDetails'
import HomeCard from './HomeCard'
function App() {
 
  return (
    <>
      
              <Routes>
                    <Route path="/" element={<HomeCard/>}/>
                   <Route path="/CardDetails" element={<CardDetails/>}/>
                   
              </Routes>
       

     </>
  )
}

export default App

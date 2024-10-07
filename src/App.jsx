 
 import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Dishes from './Components/Dishes'
 import { Routes,Route } from 'react-router-dom'
 const App = () => {
   return (
     <div>
      <Navbar  />
     <Home/>
     <Dishes/>
      
      
     </div>
   )
 }
 
 export default App

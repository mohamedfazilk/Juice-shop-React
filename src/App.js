import React from "react";
import { BrowserRouter, Routes, Route } from
'react-router-dom'
// importing the Pages
import About from "./pages/About";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

//importing the Components
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/cocktail/:id" element={<SingleCocktail/>}/>
        <Route  path="*" element={<Error/>}/>
         
     
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

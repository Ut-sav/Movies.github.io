import React from "react";
import Homes from "./Component/Home";
import Search from "./Component/Search";
import Movie from "./Component/Movie";
import Single from "./Component/Single";
import Error from "./Component/Error"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

const App =()=>{
  
  
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homes/>}/>
    <Route path="/movie/:id" element={<Single/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
  </BrowserRouter>
  
  </>)
}

export default App;

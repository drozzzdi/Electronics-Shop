import React from 'react';
import Home from './Home';
import Searched from './Searched';
import SortProducts from './SortProducts';
import { Route, Routes} from "react-router-dom";

function Pages() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/product/:type" element={<SortProducts/>}/>
        </Routes>
    </div>
  )
}

export default Pages
import React from 'react';
import Home from './Home';
import Searched from './Searched';
import Product from './Product';
import SortProducts from './SortProducts';
import Basket from './Basket';
import { Route, Routes} from "react-router-dom";

function Pages() {
  return (
    <div>
        <Routes>
            <Route path="/:home" element={<Home/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/product/:type" element={<SortProducts/>}/>
            <Route path="/category/:type" element={<Product/>}/>
            <Route path="/basket" element={<Basket/>}/>
        </Routes>
    </div>
  )
}

export default Pages
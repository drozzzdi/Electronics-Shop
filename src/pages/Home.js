import React from 'react';
import Searcher from '../components/Searcher/Searcher';
import Category from '../components/Category/Category';
import Products from '../components/Products/Products';


function Home() {
  return (
    <div>
        <Searcher/>
        <Category/>
        <Products/>
    </div>
  )
}

export default Home
import React from 'react';
import './Searcher.css';
import {HiDesktopComputer} from 'react-icons/hi';
import {FiSearch} from 'react-icons/fi';
import {BsFillBasketFill} from 'react-icons/bs';
import {useState} from 'react';


function Searcher() {
    const [input,setInput]=useState('');

    const formHandler=(e)=>{
        e.preventDefault();
    }

  return (
    <header className='header-container'>
        <div className='logo'>
            <h1>media <span>store</span></h1>
            <div className='logo-yellow-wrapper'>
            <HiDesktopComputer className='logo-icon'></HiDesktopComputer>
            </div>
        </div>
        <form onSubmit={formHandler}>
            <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} placeholder='wyszukaj produkt...'></input>
            <FiSearch className='search-icon'></FiSearch>
        </form>
        <div className='basket'>
            <BsFillBasketFill className='basket-icon'></BsFillBasketFill>
            <p>Koszyk</p>
        </div>
    </header>
  )
}

export default Searcher
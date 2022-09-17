import React from 'react';
import './Searcher.css';
import {useNavigate,Link} from 'react-router-dom';
import {HiDesktopComputer} from 'react-icons/hi';
import {FiSearch} from 'react-icons/fi';
import {BsFillBasketFill} from 'react-icons/bs';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {active} from '../../actions';


function Searcher() {
    const [input,setInput]=useState('');
    const navigate=useNavigate();
    const counter=useSelector(state=>state.counter);
    const dispatch=useDispatch();


    const formHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input);
        setInput('')
    }

  return (
    <header className='header-container'>
        <Link className='textdecor' to={"/"} onClick={()=>dispatch(active(0))}>
             <div className='logo'>
                 <h1>media <span>store</span></h1>
                 <div className='logo-yellow-wrapper'>
                    <HiDesktopComputer className='logo-icon'></HiDesktopComputer>
                 </div>
             </div>
        </Link>
        <form onSubmit={formHandler}>
            <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} placeholder='wyszukaj produkt...'></input>
            <FiSearch onClick={formHandler} className='search-icon'></FiSearch>
        </form>
        <Link className='textdecor' to={'/basket'}>
            <div className='basket'>
                <BsFillBasketFill className='basket-icon'></BsFillBasketFill>
                <p>{counter<1?'Koszyk':counter+',00 zł'}</p>
            </div>
        </Link>
    </header>
  )
}

export default Searcher
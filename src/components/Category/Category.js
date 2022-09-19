import React from 'react';
import {useState,useEffect} from 'react';
import Records from '../../smartphons.json';
import './Category.css';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {active} from '../../actions';

function Category() {
  const[productCategory, setProductCategory]=useState([]);
  const choise=useSelector(state=>state.choise);
  const dispatch=useDispatch();

  useEffect(()=>{
    let productsList=new Set(Records.map(record=>record.category));
    productsList=['wszystkie',...productsList];
    setProductCategory(productsList);
  },[])
 
  const categoryHandler=(e)=>{
    dispatch(active(e.target.dataset.set))
  }

  return (
    <nav className='category-container'>
      {productCategory.map((product,index)=>{
        return(
          <NavLink key={index} className='category-link'to={'/product/'+product}>
              <button onClick={categoryHandler} key={index} data-set={index} className={index==choise? 'category-button-active' : 'category-button'}>{product}</button>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Category
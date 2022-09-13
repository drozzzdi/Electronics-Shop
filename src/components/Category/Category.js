import React from 'react';
import {useState,useEffect} from 'react';
import Records from '../../smartphons.json';
import './Category.css';
import {NavLink} from 'react-router-dom';

function Category() {
  const[productCategory, setProductCategory]=useState([]);
  const[activeClass, setActiveClass]=useState(0);

  useEffect(()=>{
    let productsList=new Set(Records.map(record=>record.category));
    productsList=['wszystkie',...productsList];
    setProductCategory(productsList);
  },[])
 
  const categoryHandler=(e)=>{
    //console.log(e.target.innerText);
    const activeIndex=e.target.dataset.set;
    setActiveClass(activeIndex);
  }

  return (
    <nav className='category-container'>
      {productCategory.map((product,index)=>{
        return(
          <NavLink key={index} className='category-link'to={'/product/'+product}>
              <button onClick={categoryHandler} key={index} data-set={index} className={index==activeClass? 'category-button-active' : 'category-button'}>{product}</button>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Category
import React,{useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import Records from "../smartphons.json";
import {useDispatch} from 'react-redux';
import {increment,commission} from '../actions';
import './sort.css';

function SortProducts() {
    const [category, setCategory]=useState([]);
    let params=useParams();
    const dispatch=useDispatch();

    const getCategory=async(brand)=>{
        let products=[];
        Records.forEach(record=> ((record.category.toLocaleLowerCase().includes(brand.toLocaleLowerCase())))?products.push(record.id):products);
        setCategory(products);
    }

    useEffect(()=>{
        getCategory(params.type)
    },[params.type])

  return (
    <div className='container-sort'>
        {Records.map(record=>{for(let i=0;i<category.length;i++){
            if(category[i]==record.id){
                return(
                    
                        <div key={record.id} className="wrapp-product">
                            <Link className='link-product' to={"/category/"+record.id}>
                                <img src={"../"+record.img}/>
                                <h3>{record.name}</h3>
                                <p>{record.description}</p>
                                <p className='price-product'>{record.price.toFixed(2)}zł</p>
                            </Link>
                            <button onClick={()=>{
                                dispatch(increment(record.price))
                                dispatch(commission(record.id))
                            }}>dodaj do koszyka</button>
                        </div>
                   
                )
            }
        }}
        )}
        {Records.map(record=>{if(category.length<1){
            return(
                
                        <div key={record.id} className="wrapp-product">
                            <Link className='link-product' to={"/category/"+record.id}>
                                <img src={"../"+record.img}/>
                                <h3>{record.name}</h3>
                                <p>{record.description}</p>
                                <p className='price-product'>{record.price.toFixed(2)}zł</p>
                            </Link>
                            <button>dodaj do koszyka</button>
                        </div>
                    
            )
        }})}
    </div>
  )
}

export default SortProducts;
import React,{useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import Records from "../smartphons.json";
import './sort.css';

function SortProducts() {
    const [category, setCategory]=useState([]);
    let params=useParams();

    const getCategory=async(brand)=>{
        console.log(brand)
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
                    <Link className='link-product' to={"/category/"+record.id}>
                        <div key={record.id} className="wrapp-product">
                        <img src={"../"+record.img}/>
                        <h3>{record.name}</h3>
                        <p>{record.description}</p>
                        <p className='price-product'>{record.price.toFixed(2)}zł</p>
                        <button>dodaj do koszyka</button>
                        </div>
                    </Link>
                )
            }
        }}
        )}
        {Records.map(record=>{if(category.length<1){
            return(
                <Link className='link-product' to={"/category/"+record.id}>
                        <div key={record.id} className="wrapp-product">
                        <img src={"../"+record.img}/>
                        <h3>{record.name}</h3>
                        <p>{record.description}</p>
                        <p className='price-product'>{record.price.toFixed(2)}zł</p>
                        <button>dodaj do koszyka</button>
                        </div>
                    </Link>
            )
        }})}
    </div>
  )
}

export default SortProducts;
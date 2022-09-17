import React from 'react';
import Records from '../../smartphons.json';
import {Link} from 'react-router-dom';
import './Products.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment,commission} from '../../actions';

function Products() {
  const dispatch=useDispatch();
  const orders=useSelector(state=>state.orders);
  console.log(orders)
  return (
    <div className='container-products'>
        {Records.map(record=>{
        return(
          <div key={record.id} className="wrapp-product">
            <Link className='link-product' to={"/category/"+record.id}>
            <img src={record.img}/>
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
      })}
    </div>
  )
}

export default Products;
import React from 'react';
import Records from '../../smartphons.json';
import './Products.css';

function Products() {
  return (
    <div className='container-products'>
        {Records.map(record=>{
        return(
          <div key={record.id} className="wrapp-product">
            <img src={record.img}/>
            <h3>{record.name}</h3>
            <p>{record.description}</p>
            <p className='price-product'>{record.price.toFixed(2)}zł</p>
            <button>dodaj do koszyka</button>
          </div>
        )
      })}
    </div>
  )
}

export default Products;
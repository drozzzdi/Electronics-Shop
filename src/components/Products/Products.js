import React from 'react';
import Records from '../../smartphons.json';

function Products() {
  return (
    <div>
        {Records.map(record=>{
        return(
          <div key={record.id}>
            <img src={record.img}/>
          </div>
        )
      })}
    </div>
  )
}

export default Products;
import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Records from "../smartphons.json";
import './searched.css';

function Searched() {
    const [searchedProducts,setSearchedProducts]=useState([]);
    let params=useParams();

    const getSearched=async(search)=>{
        let products=[];
        Records.forEach(record=> ((record.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))?products.push(record.id):products);
        setSearchedProducts(products);
    }

    useEffect(()=>{
        getSearched(params.search)
      },[params.search]);

  return (
    <div className='container-searched'>
        {Records.map(record=>{for(let i=0;i<searchedProducts.length;i++){
            if(searchedProducts[i]==record.id){
                return(
                    <Link className='link-product' to={"/product/"+record.id}>
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
        }})}
    </div>
  )
}

export default Searched;
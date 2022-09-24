import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Records from "../smartphons.json";
import './searched.css';
import {useDispatch} from 'react-redux';
import {increment,commission} from '../actions';

function Searched() {
    const [searchedProducts,setSearchedProducts]=useState([]);
    let params=useParams();
    const dispatch=useDispatch();

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
                    
                        <div key={record.id} className="wrapp-product">
                            <Link className='link-product' to={"/category/"+record.id}>
                                <img src={"../"+record.img}/>
                                <div className={record.sale?'sale':'disapear'}>Promocja</div>
                                <h3>{record.name}</h3>
                                <p>{record.description}</p>
                                <p className={record.sale?'price-cross':'price-product'}>{record.price.toFixed(2)}zł</p>
                                <p className={record.sale?'price-cut':'disapear'}>{(record.price-record.cut).toFixed(2)}zł</p>
                            </Link>
                            <button onClick={()=>{
                            dispatch(increment(record.sale?record.price-record.sale:record.price))
                            dispatch(commission(record.id))
                            }}>dodaj do koszyka</button>
                        </div>
                )
            }
        }})}
    </div>
  )
}

export default Searched;
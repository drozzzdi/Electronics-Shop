import {useSelector, useDispatch} from 'react-redux';
import {increment,cancel,decrement,commission,uncommis} from '../actions';
import {useState,useEffect} from 'react';
import Records from '../smartphons.json';
import './basket.css';

function Basket() {
    const[products,setProducts]=useState([]);
    const orders=useSelector(state=>state.orders);
    const dispatch=useDispatch();
    
    useEffect(()=>{
        let productsList=new Set(orders);
        productsList=[...productsList]
        setProducts(productsList)
      },[orders])
      

  return (
    <div className='container-basket'>
        {Records.map(record=>{for(let i=0;i<products.length;i++){
            let quantity=[];
            if(products[i]==record.id){
                let product=0;
                orders.map(order=>{if(order==products[i]){product+=1}})
                quantity.push(product);
                return(
                    <div className='card-wrapper' key={record.name}>
                    <p>{record.name}</p>
                    <p>{record.price+' zł'}</p>
                    <div className='quantity'>
                    <button onClick={()=>{
                                dispatch(increment(record.price))
                                dispatch(commission(record.id))
                            }}>+</button>
                    <div>{product}</div>
                    <button onClick={()=>{
                                dispatch(decrement(record.price))
                                dispatch(uncommis(record.id))
                                dispatch(cancel(-1))
                            }}>-</button>
                    </div>
                    <p>{product*record.price+' zł'}</p>
                    <button onClick={()=>{
                                dispatch(cancel(record.id))
                                dispatch(decrement(product*record.price))
                               }}>Usuń</button>
                </div>
                )
                
            }}})}
       
    </div>
  )
}

export default Basket
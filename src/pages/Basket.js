import {useSelector, useDispatch} from 'react-redux';
import Modal from './Modal';
import {increment,cancel,decrement,commission,uncommis,salle} from '../actions';
import {useState,useEffect} from 'react';
import Records from '../smartphons.json';
import './basket.css';

function Basket() {
    const[products,setProducts]=useState([]);
    const [input,setInput]=useState('');
    const[openModal, setOpenModal]=useState(false);
    const orders=useSelector(state=>state.orders);
    const counter=useSelector(state=>state.counter);
    const cutPrice=useSelector(state=>state.cut);
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
                        <p className='product-name'>{record.name}</p>
                        <p className='product-price'>{record.sale?record.price-record.sale:record.price+' zł'}</p>
                        <div className='quantity'>
                        <button className='increment-button' onClick={()=>{
                                    dispatch(increment(record.sale?record.price-record.sale:record.price))
                                    dispatch(commission(record.id))
                                }}>+</button>
                        <div className='quantity-product'>{product}</div>
                        <button className='decrement-button' onClick={()=>{
                                    dispatch(decrement(record.sale?record.price-record.sale:record.price))
                                    dispatch(uncommis(record.id))
                                    dispatch(cancel(-1))
                                }}>-</button>
                        </div>
                        <p className='product-sum'>{product*(record.sale?record.price-record.sale:record.price)+' zł'}</p>
                        <button className='remove-product' onClick={()=>{
                                    dispatch(cancel(record.id))
                                    dispatch(decrement(product*(record.sale?record.price-record.sale:record.price)))
                        }}>Usuń</button>
                    </div>
                )
            }}})
            }
            <div className='basket-summary'>
                <div className='cut-price'>
                <input className='cutprice-input' 
                    placeholder='kod zniżkowy' 
                    onChange={(e)=>setInput(e.target.value)} 
                    type="text" 
                    value={input} ></input>
                <button className='cutprice-button' onClick={()=>{if(input=='DN78T002'&&cutPrice==='true'){ dispatch(salle('false')); dispatch(decrement(200))}}}>Gotowe!</button>
                </div>
                <div className='summary-price'>Koszt: {counter} zł</div>
                <button className='summary-button' onClick={()=> setOpenModal(true)}>Zapłać</button>

            </div>
            
        <Modal 
        open={openModal}
        onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default Basket
import './discount.css';
import Popup from './Popup';
import {useState} from 'react';

function Discount() {
    const[openModal, setOpenModal]=useState(false);

  return (
    <div className='discount-container'>
        <button onClick={()=> setOpenModal(true)} className='discountBtn'>Pobierz zniżkę</button>
        <Popup 
        open={openModal}
        onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default Discount;
import React from 'react';
import './modal.css';
import {GrFormClose} from 'react-icons/gr';

const Modal=({open, onClose})=> {
    if(!open)return null;
  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e)=>{
            e.stopPropagation();
        }}
        className='modal-container'>
            <div className='modal-content'>
                <p>Dziękujemy za zakup!</p>
                <p className='order-content'>Otrzymaliśmy płatność. Zamówienie niedługo dotrze do Ciebie!</p>
                <button className='modal-button' onClick={onClose}>Zamknij</button>
            </div>
            <GrFormClose onClick={onClose} className='close-icon'></GrFormClose>
        </div> 
    </div>
  )
}

export default Modal
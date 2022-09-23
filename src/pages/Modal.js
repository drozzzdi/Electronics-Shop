import {useSelector} from 'react-redux';
import './modal.css';
import {GrFormClose} from 'react-icons/gr';

const Modal=({open, onClose})=> {
    const counter=useSelector(state=>state.counter);
    if(!open)return null;
    

  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e)=>{
            e.stopPropagation();
        }}
        className='modal-container'>
            <div className='modal-content'>
                <p>{counter>0?'Dziękujemy za zakup naszych produktów!':'Koszyk jest pusty'}</p>
                <p className='order-content'>{counter>0?'Otrzymaliśmy płatność. Zamówienie niedługo dotrze do Ciebie!':'Dodaj produkt, który chcesz kupić.'}</p>
                <button className='modal-button' onClick={onClose}>Zamknij</button>
            </div>
            <GrFormClose onClick={onClose} className='close-icon'></GrFormClose>
        </div> 
    </div>
  )
}

export default Modal
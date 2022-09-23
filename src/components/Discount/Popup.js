import {GrFormClose} from 'react-icons/gr';
import './popup.css';

function Popup({open, onClose}) {
    if(!open)return null;
    return (
      <div onClick={onClose} className='popup-overlay'>
          <div onClick={(e)=>{
              e.stopPropagation();
          }}
          className='popup-container'>
              <div className='popup-content'>
                  <p>Gratulujemy! Otrzymujesz -200zł zniżki!</p>
                  <p className='discount-content'>Twój kod zniżkowy: <span>DN78T002</span></p>
                  <button className='popup-button' onClick={onClose}>Zamknij</button>
              </div>
              <GrFormClose onClick={onClose} className='icon-close'></GrFormClose>
          </div> 
      </div>
    )
}

export default Popup;
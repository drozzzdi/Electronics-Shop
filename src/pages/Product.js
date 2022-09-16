import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Records from "../smartphons.json";
import './product.css';

function Product() {
  const[smartphon,setSmartphon]=useState();
  let params=useParams();

  const getCategory=async(model)=>{
    setSmartphon(model)
  }

  useEffect(()=>{
    getCategory(params.type)
  },[params.type])


  return (
    <div className='smartphone-container'>
      {Records.map(record=>{if(record.id==smartphon){
        return(
          <div key={record.id} className="wrapp-smartphone">
            <h2>{record.name}</h2>
            <div className='flex'>
              <div className='img-smartphone'>
                <img src={"../"+record.img}/>
                <p className='price-product'>{record.price.toFixed(2)}zł</p>
                <button>dodaj do koszyka</button>
              </div>
              <div className='tech-smartphone'>
                <p>{record.description}</p>
                <h4>Dane techniczne:</h4>
                <div className='tabel'>
                  <div className='tabel-left'>
                    <ul>
                      <li>Wyswietlacz</li>
                      <li>Pamięć</li>
                      <li>Procesor</li>
                      <li>System operacyjny</li>
                      <li>Aparat</li>
                      <li>Lampa LED</li>
                      <li>GPRS</li>
                      <li>GPS</li>
                    </ul>
                  </div>
                  <div className='tabel-right'>
                    <ul>
                      <li>Tak</li>
                      <li>Duza</li>
                      <li>Dobry</li>
                      <li>Własciwy</li>
                      <li>Tak</li>
                      <li>Swieci</li>
                      <li>Tak</li>
                      <li>Nie</li>
                    </ul>
                  </div>
              </div>
              </div>
            </div>
            
          </div>
        )
      }})}
    </div>
  )
}

export default Product;
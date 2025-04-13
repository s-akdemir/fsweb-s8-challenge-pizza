import React from 'react';  
import { Switch, Route, Link } from 'react-router-dom';


export default function Home() {
    
    
    
    const userName = "Selman"; // default value for userName  
  return (
        <>  
          <header className='header'>
          <h1 className="head">Teknolojik Yemekler</h1>
           <div className="head-content">
           <p className="head-text">fırsatı kaçırma</p>
           <h2 className="wrapped-text">Kod Acıktırır, <span>Pizza Doyurur</span></h2>
            <div className='button'>
            <p>Kullanıcı Adını: {userName}</p> 
            </div> 
            <Link to={`/order/${userName}`}>  
            <button className='button'>Spariş Ver</button>
            </Link>
           </div>
          </header>
        </>
    );
    }  
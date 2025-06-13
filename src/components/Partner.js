import React from 'react'
import './Partner.css';
import '../../components/Header/Header'
import './Footer/Footer'
import './Navbar/Navbar'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png'

import Footer from './Footer/Footer';
import Header from './Heaader/Header';
import Navbar from './Navbar/Navbar';
const Partner = () => {
  return (
    <div>
    <Header/>
   <Navbar/>
      <div className='ph1'><div className='p1h1'><h1>Partners</h1></div></div>

      <div className='partnerContainer'>
        <div className='picOne'>
          <a href='https://www.h7network.com/' target="_blank" rel="noopener noreferrer" > <div className='pc1'>
            <img src={p1}/>
            <p>H7 Network</p>
          </div></a>
         
          <a href='https://www.evolvewomensnetwork.com/' target="_blank" rel="noopener noreferrer" ><div className='pc2'>
            <img src={p2}/>
            <p>EVOLVE WOMEN'S NETWORK</p>
          </div></a> 
        </div>
        <div className='picTwo'>
         <a href='https://www.evolvewomensnetwork.com/' target="_blank" rel="noopener noreferrer" ><div className='pc3'>
            <img src={p3}/>
            <p>H7 Town Square</p>
          </div></a>  
           <a href='https://www.thealternativeboard.com/' target="_blank" rel="noopener noreferrer" ><div className='pc4'>
            <img  src={p4}/>
            <p>TAB</p>
          </div></a>
        </div>

        <a href='https://www.blackachievers.com/' target="_blank" rel="noopener noreferrer" ><div className='pc5'>
          <img src={p5}/>
          <p>Black Achievers</p>
        </div></a> 
      </div>
      <Footer />
    </div>
  )
}
export default Partner;
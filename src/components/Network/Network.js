import React from 'react'
import './Network.css'
import Header from '../Heaader/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Network = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='networkContainer'>
        <iframe src="https://tracsdev.apttechsol.com/proxynetwork" style={{width:'100%',height:"100%"}}>

        </iframe>
      </div>
      <Footer/>
    </div>
  )
}

export default Network

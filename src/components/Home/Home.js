import React from 'react'
import './Home.css';
import Slider from 'react-slick';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import pd1 from '../assets/pd1.png'
import pd2 from '../assets/pd2.png';
import pd3 from '../assets/pd3.png';
import Data2 from '../../components/Data/Data2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Header from '../Heaader/Header';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='homeHolder'>
            <Header/>
            <Navbar />
            <div className='serch-container'>
               
                <div className='sh2'><h2 >TRACS helps you effortlessly connect and make introductions like a champion!</h2></div>
               
                <div className='network-container'>
                    <Link to='/makeIntro'><button>Make Introduction Instantly</button></Link>
                   <Link to='/myMembership'><button><span>My Dashboard</span></button></Link> 
                </div>


            </div><div className='home-details'>
                <div className='hd1'>
                    <div className='hd1-pic'>
                        <img src={pd1} style={{width:'100%',height:"100%"}}/>
                    </div>
                    <div className='hd1-details'>
                        <h1>Empowering Businesses,</h1>
                        <h1>Elevating Connections</h1>
                       <Link to='/myMembership'><button>Join Now</button></Link> 
                    </div>
                </div>
                <div className='line-1'>
                    <p>Welcome to <span style={{ color: "orange" }}>TRACS</span>, your go-to source for connecting with a diverse community of talented individuals. Connect, Collaborate, and build meaningful relationships within our vibrant community.</p>
                </div>
                <div className='hd2'>
                    <div className='hd2-details'>
                        <h1>Benefits of Joining</h1>
                        <h3>NETWORKING OPPORTUNITIES:</h3>
                        <p>Connect with like-minded professionals and expand your network.</p>
                        <h3>COLLABORATION:</h3>
                        <p>Find potential collaborators for your projects.</p>
                        <h3>COMMUNITY SUPPORT:</h3>
                        <p>Be a part of a supportive community ready to share insights and advice.</p>
                    </div>
                    <div className='hd2-pic'>
                        <img src={pd2} style={{width:'100%',height:"100%"}}/>
                    </div>
                </div>
                <div className='hd3'>
                    <div className='hd3-pic'>
                        <img src={pd3} style={{width:'100%',height:"100%"}}/>
                    </div>
                    <div className='hd3-details'>
                        <h1>How to Join</h1>
                        <h3>Become a part of our growing community!</h3>
                        <h3>Joining is easy:</h3>
                        <div className='hd3-dd'>
                            <h3>1.CREATE AN ACCOUNT:</h3>
                            <p>Provide details about your professional background, skills, and interests.</p>
                            <h3>2.COMPLETE YOUR PROFILE:</h3>
                            <p>Provide details about your professional background, skills, and interests.</p>
                            <h3>3.CONNECT AND COLLABORATE:</h3>
                            <p>Explore the directory, connect with other members, and start collaborating on exciting projects.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='bott'><h1>Sponsers</h1></div>
                <div className='bottnav'>
                    <div className='bottnav1'></div>
                    <div className='bottnav2'></div>
                </div>
            </div>
            <div className='cardBottom'>
                <div className='cdh'>
                    <h1 >Meet some happy customers</h1>
                </div>
                <div className='bottnav3'>
                    <div className='bottnav1'></div>
                    <div className='bottnav2'></div>
                </div>
                <div className='cardP'><p>Our Esteemed clients say about our Services.</p></div>
                <div className="carousel-container">
                <Slider {...settings}>
                    {Data2.map((item, index) => (
                        <div key={index} className="carousel-item">
                          
                            <div className='carousel-pic'><span><img src={item.image} alt={item.name} className="carousel-image" /></span  ></div>

                            <div className="carousel-content">
                                <h3>{item.name}</h3>
                                <p style={{color:"orange"}}>{item.job}</p>
                                <p style={{color:"black"}}>{item.review}</p>
                                <p>{item.stars}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            </div>
         
            <Footer />
        </div>
    )
}
export default Home;
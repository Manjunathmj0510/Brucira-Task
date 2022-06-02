import React from 'react';
import Carousel from './Crousal';
import './Home.css'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebook,FaLinkedin} from 'react-icons/fa'
import {RiInstagramLine} from 'react-icons/ri'

function Home(props) {
    return (
        <div className='home-container'>
        <section className='header-section'>
        <div className='header-brand'><h3 className='header-brand-text'>Innovation</h3></div>
        <div className='header-items-section'>
        <ul className='header-items'>
        <li>Aboutus</li>
        <li>Trust Areas</li>
        <li>Ecosystem Partners</li>
        <li>Accelarators</li>
        <li>News & Events</li>
        <button className='header-button'>Apply Now</button>
        </ul>
        </div>
        </section>
        <section className='content-section'>
        <div className='content-wrapper'>
        <div className='content-div'>
        <p className='content-highlight'><small className='content-line'>challenging limits everyday</small><br/>
        Scale.Innovate.<br/>Impact the Future.</p>
        <p className='content-para'>We collaborate with start-ups and external agencies to address<br/> challenges in the steel value chain and proximate sectors.</p>
        <button className='header-button'>Apply Now</button>
        </div><div className='image-div'>
        <img className='image-div-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUK1LaBaummJfuW6GIM_kt3R9egIlpqVpEKw&usqp=CAU' alt='dummy'/>
        <img className='image-div-image2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUK1LaBaummJfuW6GIM_kt3R9egIlpqVpEKw&usqp=CAU' alt='dummy'/>
        </div>
        </div>
        </section> 
        <section className='content-details-section'>
        <div className='content-details-header'>
        <p className='content-highlight'><small className='content-line'>Lead the Revolution</small><br/>
        Your Vision.Our Network.<br/>Let's build a legacy togeter.</p></div>
        </section>
        <section>
            <Carousel/>
        </section>
        <section className='footer-section'>
            <div className='home-footer'>
              <div className='footer-brand'>INNOVATION</div>
              <div className='footer-items'>
              <ul className='footer-list'>
              <li>Aboutus</li>
        <li>Trust Areas</li>
        <li>Ecosystem Partners</li>
        <li>Accelarators</li>
        <li>News & Events</li>
              </ul></div>
            </div>
            <div className='social-icons'>
                <p>contact us on</p>
                <ul className='icons-list'>
                <li><AiFillTwitterCircle/></li>
                <li><FaFacebook/></li>
                <li><FaLinkedin/></li>
                <li><RiInstagramLine/></li>
                </ul>
            </div>
        </section>   
        </div>
    );
}

export default Home;
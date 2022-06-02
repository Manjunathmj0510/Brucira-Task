import React from 'react';
import Carousel from './Crousal';
import './Home.css'
import {AiFillTwitterCircle,AiOutlineCopyright} from 'react-icons/ai'
import {FaFacebook,FaLinkedin} from 'react-icons/fa'
import {RiInstagramLine} from 'react-icons/ri'
import {IoIosArrowForward} from 'react-icons/io'

function Home(props) {
    return (
        <div className='home-container-section'>
        <section className='header-section'>
        <div className='header-brand'><h3 className='header-brand-text'>INNOVATION</h3></div>
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
        <div className='home-container'>
        <section className='content-section'>
        <div className='content-wrapper'>
        <div className='content-div'>
        <p className='content-highlight'><small className='content-line'>challenging limits everyday</small><br/>
        Scale.Innovate.<br/>Impact the Future.</p>
        <p className='content-para'>We collaborate with start-ups and external agencies to address<br/> challenges in the steel value chain and proximate sectors.</p>
        <button className='content-button'>Apply Now<IoIosArrowForward/></button>
        </div><div className='image-div'>
        <img className='image-div-image' src='https://th.bing.com/th/id/OIP.9gmmHhAGK7Q93IezLHhAhgHaEo?w=304&h=190&c=7&r=0&o=5&pid=1.7' alt='dummy'/>
        <img className='image-div-image1' src='https://th.bing.com/th/id/OIP.RP-HEWi3BhaXoW_cUxs-WQHaE8?w=285&h=190&c=7&r=0&o=5&pid=1.7' alt='dummy'/>
        <img className='image-div-image2' src='https://th.bing.com/th/id/OIP.rrIexnGdFPT4c3MHAzoFgwHaE8?w=250&h=180&c=7&r=0&o=5&pid=1.7' alt='dummy'/>
        </div>
        </div>
        </section> 
        <section className='content-details-section'>
        <div className='content-details-header'>
        <p className='content-highlight1'><small className='content-line'>Lead the Revolution</small><br/>
        Your Vision.Our Network.<br/>Let's build a legacy togeter.</p>
        <button className='content-button'>Learn About Us<IoIosArrowForward/></button></div>
        </section>
        <section className='crousel-section'>
        <div className='crousel-section-container'>
        <Carousel/>
        </div>
        </section>
        </div>
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
            <div className='social-wrapper'>
            <div className='social-icons'>
                <p>contact us on</p>
                <ul className='icons-list'>
                <li><AiFillTwitterCircle/></li>
                <li><FaFacebook/></li>
                <li><FaLinkedin/></li>
                <li><RiInstagramLine/></li>
                </ul>
            </div>
            <div className='terms-list'><ul className='terms-list-itmes'><li>Terms & Contions</li><li><AiOutlineCopyright/>&nbsp;Copy Rights</li></ul></div>
        </div>
        </section>   
        </div>
    );
}

export default Home;
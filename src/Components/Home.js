import React from 'react';
import './Home.css'

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
        <div className='content-div'>
        <p className='content-highlight'><small className='content-line'>challenging limits everyday</small><br/>
        Scale.Innovate.<br/>Impact the Future.</p>
        <p className='content-para'>We collaborate with start-ups and external agencies to address<br/> challenges in the steel value chain and proximate sectors.</p>
        <button className='header-button'>Apply Now</button>
        </div><div className='image-div'><img src='' alt='dummy'/></div></section> 
        <section className='content-details-section'>
        <div className='content-details-header'>
        <p className='content-highlight'><small className='content-line'>Lead the Revolution</small><br/>
        Your Vision.Our Network.<br/>Let's build a legacy togeter.</p></div>
        </section>     
        </div>
    );
}

export default Home;
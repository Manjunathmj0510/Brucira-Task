// import {useState} from 'react'
// import Slider from 'react-slick'
// import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


import React, { Component } from "react";
import Slider from "react-slick";
import './crousal.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#555",borderRadius:'50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  background: "#555",borderRadius:'50%'}}
      onClick={onClick}
    />
  );
}
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

          const hotelCards = [
              {
                imageSrc:
                  'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
                title: 'Founder Focused',
                description: 'Founder Focused We seek entrepreneurs with inventiveness, tenacity and passion, who can create what has yet to be imagined',
                pricingText: 'USD 50/Day',
                features: ['Free Wifi', 'Free breakfast'],
              },
              {
                imageSrc:
                  'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                title: 'Deep Technolgies',
                description: 'Founder Focused We seek entrepreneurs with inventiveness, tenacity and passion, who can create what has yet to be imagined. ',
                pricingText: 'USD 80/Day',
                features: ['Free Wifi', 'Free breakfast'],
              },
              {
                imageSrc:
                  'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                title: 'Paid Proof Of Concept',
                description: 'We give entrepreneurs access to our technology, expertise and networks, helping them build the global businesses of tomorrow.',
                pricingText: 'USD 150/Day',
                features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
              },
              {
                imageSrc:
                  'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                title: 'Royal Suite',
                description: 'We give entrepreneurs access to our technology, expertise and networks, helping them build the global businesses of tomorrow.',
                pricingText: 'USD 299/Day',
                features: [
                  'Free Wifi',
                  'Free breakfast',
                  'Discounted Meals',
                  "MacBook for work use (hotel's property)",
                ],
              },
              {
                imageSrc:
                  'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                title: 'Royal Suite',
                description: 'We give entrepreneurs access to our technology, expertise and networks, helping them build the global businesses of tomorrow.',
                pricingText: 'USD 299/Day',
                features: [
                  'Free Wifi',
                  'Free breakfast',
                  'Discounted Meals',
                  "MacBook for work use (hotel's property)",
                ],
              },
              {
                imageSrc:
                  'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                title: 'Royal Suite',
                description: 'We give entrepreneurs access to our technology, expertise and networks, helping them build the global businesses of tomorrow.',
                pricingText: 'USD 299/Day',
                features: [
                  'Free Wifi',
                  'Free breakfast',
                  'Discounted Meals',
                  "MacBook for work use (hotel's property)",
                ],
              },
            ]
    return (
      <div className='slider-container'>
        <Slider {...settings}>
          {hotelCards.map(card=><div className='card-container-div'>
            <img className='image-card-container' src={card.imageSrc}/>
            <p className='card-content'>{card.title}</p>
            <p className='card-content-detail'>{card.description}</p>
          </div>)}
        </Slider>
      </div>
    );
  }
}
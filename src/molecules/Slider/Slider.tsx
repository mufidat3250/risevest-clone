import React, { Component } from 'react'
// import { investors } from '../../data';

import Slider from 'react-slick'
import Stocks from '../../pages/Stocks';

  const Sliders = ({children, heading}:{children?:React.ReactNode; heading?:string}) => {
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        dots: false,
        responsive:[
          {
            breakpoint:1024,
            settings:{
              slidesToShow:3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
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
    return (
      <div className='relative'>
          <Slider {...settings} className=''>
        {children}
          </Slider>
      </div>
    )
  }
  
  export default Sliders

export const ButtonSlider = ({children}:{children:React.ReactNode})=>{
    let settings = {
      Infinity:true,
      dots:true,
      slideToShow:3,
      slidesToScroll:1,     
    }
    return (
      <div>
      <Slider {...settings} className='relative w-full'>
        {children}
      </Slider>
      </div>

    )
  }
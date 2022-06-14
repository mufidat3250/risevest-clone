import React from 'react'
import './SlideShow.scss'
import {slideShowData} from '../../data'

const SlideShow = () => {
  return (
    <div className='SlideShow'>
        <div className='slide-show-slider'>
            
            {slideShowData.map((data, index)=>{
                return <div className='flex flex-col slide '>
                    <span className='border w-[50px] h-[50px] leading-none p-3 grid place-items-center rounded-full mb-8'>{index+1}</span>
                    <span className='max-w-[350px] flex h-[100%] flex-nowrap'>{data}</span>
                </div>
            })}            
        </div>
    </div>
  )
}

export default SlideShow
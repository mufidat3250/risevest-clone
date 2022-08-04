import React from 'react'
import ArrowRightUp from '../../atom/Vectors/ArrowRightup'
import RiseLogo from '../../atom/Vectors/RiseLogo'

const rise = [
    {
      title: 'About Us',
      link:'/about-us',
    },
    {
      title:'Careers',
      link:'https://risevest.bamboohr.com/jobs/'
    },
    {
      title:'FAQs',
      link:'/faqs'
    },
    {
      title:'Contact Info',
      link:'/investmentClub'
    }
  ]
  
  const explore = [
    {
      title:'Investment Club',
      link:'/investmentClub'
    },
    {
      title:'Blog',
      link:'/blog'
    }
  ]
  
  const products = [
    {
      title:'Rise App',
      link:'',
  
    },
    {
      title:'Developers',
      link:''
    }
  ]
  
  const contact = [
    {
      title:'+234 01 888 3519',
      link:''
    },
    {
      title:'hello@risevest.com',
      link:''
    },
    {
      title:'Newsletter',
      link:''
    },
    {
      title:'Instagram',
      link:''
    },
    {
      title:'Twitter',
      link:''
    },

    {
      title:'Facebook',
      link:''
    },

    {
      title:'Youtube',
      link:''
    },

    {
      title:'LinkedIn',
      link:''
    },
  
  ]
const Footer = () => {
  return (
    <footer className="py-20 text-base sm:mx-auto sm:w-[80%] h-full">
    <div className=" mx-8 grid grid-cols-2 sm:grid-cols-[repeat(4,1fr)] gap-10 h-[20rem]">
            <div className="grid grid-rows-[3.5rem,1fr]">
             <RiseLogo/>

              <div className="flex flex-col space-y-[2rem]">
                {
                  rise.map(({title, link}, index)=>{
                    return <a key = {index} className='sm:text-base text-[12px] cursor-pointer'>{title}</a>
                  })
                }
              </div>
            </div>

            <div className=" grid grid-rows-[3.5rem,1fr]">
              <h1 className="font-bold">Explore</h1>

              <div className="flex flex-col space-y-[2rem]">
                {
                  explore.map(({title, link}, index)=>{
                    return <a key = {index} className='flex items-baseline space-x-3  group cursor-pointer '> <span className='sm:text-base text-[12px]'>{title}</span> <ArrowRightUp /></a>
                  })
                }
              </div>
            </div>
            <div className="grid grid-rows-[3.5rem,1fr]">
              <h1 className="font-bold">Products</h1>

              <div className="flex flex-col space-y-[2rem]">
                {
                  products.map(({title, link}, index)=>{
                    return <a key = {index} className='flex items-baseline group cursor-pointer'> <span className='sm:text-base text-[12px]'>{title}</span></a>
                  })
                }
              </div>
            </div>
            <div className= "grid grid-rows-[3.5rem,1fr]">
              <h1 className="font-bold">Contact Us</h1>

              <div className="flex flex-col space-y-[2rem]">
                {
                  contact.map(({title, link}, index)=>{
                    return <a key = {index} className='flex  items-baseline group cursor-pointe space-x-3 cursor-pointer'>  <span className='text-[12px] sm:text-base'>{title}</span> <ArrowRightUp/></a>
                  })
                }
              </div>
            </div>
    </div>       
  
</footer>
  )
}

export default Footer
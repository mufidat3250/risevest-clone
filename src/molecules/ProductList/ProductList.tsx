import React from 'react'
import Button from '../../atom/Button'
type productListProp ={
    title:string;
    disc:string;
    historyPercent:string;
    riskLevel:string}

const ProductList = ({title, disc, historyPercent, riskLevel}:productListProp) => {
  return (
    <div className='pb-[96px] flex flex-col justify-center items-center'>
    <h1 className='font-bold text-[2.5rem]'>{title}</h1>
     <p className='max-w-[500px] text-[#484d53] text-center mt-[2rem] text-[18px]'>
     {disc}
     </p>
     <div className='pt-[2rem] text-center'>
       <p><span className='text-[#949fc9]'>Historical Returns:  </span> {historyPercent} Per Annum</p>
       <p><span className='text-[#949fc9]'>Risk Level: </span> {riskLevel}</p>         
     </div>
     <div className='w-fit mt-8'>
     <Button title='Start Investing' customClass='bg-[#40bbc3] text-white py-5 px-7'/>
     </div>
    </div> 
  )
}

export default ProductList
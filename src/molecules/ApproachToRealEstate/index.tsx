import React from 'react'
type approach = {
  title:string,
}& React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
const Approach = ({title}:approach) => {
  return (
    <>
    <div className='flex flex-col items-center bg-white '>
    <h1 className='text-[2.5rem] max-w-[450px] text-center leading-tight font-normal'>{title}</h1>      
  </div>

  <div className='bg-white'>
     <div className='container bg-white pb-[6rem]'>
     <div className=' grid  grid-cols-[20rem,1fr] pl-8'>
          <div>
            <img src="/Public/Images/riseAppPhone.png" alt="" className='h-[33.375rem] w-[16.5rem] drop-shadow-2xl'/>
          </div>
          <div className='flex justify-center items-start flex-col'>
        <h1 className='text-2xl font-[500]'>Here's how it works</h1>
        <div>hfhfh</div>
      </div>
           
          </div>   
     </div>
     </div>   
  </>
  )
}

export default Approach
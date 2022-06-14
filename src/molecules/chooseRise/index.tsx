import React from 'react'

type chooseRise = {
  data:Array<{icon:React.ReactNode; text:string}>,
  title:string;
}& React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

const ChooseRise = ({data, title}:chooseRise) => {
  return (
   <div className='mx-8 bg-white'>
      <div className='grid place-items-center'>
      <h1 className='text-center text-[2.5rem] max-w-[570px]'>{title}</h1>
      </div>
        <div className={`grid  grid-cols-[repeat(${data.length},1fr)] gap-6 m-10`}>
        {data.map(({icon, text})=>{
            return <div className=''>               
                <div>
                   <span>{icon}</span>
                   <p className='mt-[1.5rem]'>{text}</p> 
                </div>
            </div>
        })}
    </div>
   </div>
  )
}

export default ChooseRise
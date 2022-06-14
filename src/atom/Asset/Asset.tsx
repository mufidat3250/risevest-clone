import React from 'react'
import H3 from '../Typography/H3'
type AssetProp = {
    img:string;
    title:string;
    subtext:string;
    history:string;
    risklevel:string;
    learnMore:string;
    bg_color:string;
}

const Asset = ({img, bg_color,title, subtext,history, risklevel, learnMore}:AssetProp) => {
  return (
    <div className='pt-[9rem] rounded-2xl shadow flex' style={{backgroundColor:bg_color}}>
    <div className='bg-white rounded-2xl flex flex-grow flex-col items-center px-4 pb-8 '>
        <div className=' p-4 bg-white rounded-full -translate-y-1/2'>
          <img src={img} className='w-[5.3125rem] h-[5.3125rem]' alt="" />                    
        </div>
          <H3>{title}</H3>
        <p className='text-center text-[#484848] my-5'>{subtext}</p>

        <div className='text-center my-5'>
          <p><span className='text-[#919fb5]'>Historical Return</span> <span className='text-[#484848] capitalize'>{history}</span></p>
          <p><span className='text-[#919fb5]'>Risk Level</span> <span className='text-[#484848] capitalize'>{risklevel}</span></p>                   
        </div>
       <a href="" className='group cursor-pointer flex justify-center items-center space-x-5 '> <span className='text-primary'>{learnMore}</span>
       <svg width=".8125em" height=".625em" viewBox="0 0 13 10" fill="none" className="duration-300 transition-all -translate-x-full opacity-0 group-hover:opacity-100 group-hover:traslate-x-0"><path d="M.5 5a.5.5 0 01.5-.5h9.975L7.155.862a.5.5 0 01.69-.724l4.362 4.155a1 1 0 01-.009 1.423L7.845 9.862a.5.5 0 01-.69-.724L10.991 5.5H1A.5.5 0 01.5 5z" fill="#0898A0"></path></svg>
       
       </a>
    </div>
  </div>
  )
}

export default Asset
import React, { ReactNode } from 'react'

const AssetIcon = ({img}:{img?:string}) => {
  return (
    <div className={' bg-white p-[1rem] rounded-full -translate-y-[50%]  w-fit h-fit'}>
          <img src={img} alt="" className='h-[7.3125rem] w-[7.3125rem] z-10' />
      </div> 
  )
}

export default AssetIcon
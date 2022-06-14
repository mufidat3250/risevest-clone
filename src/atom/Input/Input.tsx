import React from 'react'
import './Input.scss'

const Input = ({title, subtitle, type, placeholder, amount}:{title?:string, type?:string, subtitle?:string, placeholder?:string, amount?:string}) => {
  return (
    <div className='space-y-[0.5rem]'>
        <p className='mb-[0.5rem] text-[#4f5a5f]'>{title}</p>
        {subtitle && <p className='text-[#b1bcc4] pt-4 text-xs italic '>{subtitle}</p>}
    <div className='input-container'>
  
        <input type={type} placeholder={placeholder}/>
    </div>
    <p className='text-[#9ea4a9]'>{amount}</p>
    </div>
  )
}

export default Input
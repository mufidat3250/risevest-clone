import React from 'react'
import './Select.scss'

const Select = ({options, title}:{options:Array<string>, title?:string}) => {
  return (
    <div>
        <p className='text-[#4f5a5f]'>{title}</p>
        <div className='select-container'>
            <select name="" id="">
                {
                    options.map((option, index)=> {
                        return <option key={index}>{option}</option>
                    })
                }
            </select>
        </div>
    </div>
  )
}

export default Select
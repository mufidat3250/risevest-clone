import React from 'react'
type H2Prop = {
    children:React.ReactNode;
    color?:string
}& React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const H2 = ({children, color}:H2Prop) => {
  return (
    <p className='text-[2rem] font-semibold tracking-[-0.05rem]' style={{color:color}}>{children}</p>
  )
}

export default H2
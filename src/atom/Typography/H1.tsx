import React, { ReactNode } from 'react'
type H1Prop = {
    children?: ReactNode;
    color?: string;
    font_size?: string
}& React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const H1 = ({children, color, ...otherProp}:H1Prop) => {
  return (
    <div className='text-[2.5rem] font-bold' {...otherProp} style={{color:color}}>{children}</div>
  )
}

export default H1
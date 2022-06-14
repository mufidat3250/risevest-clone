import React from 'react'
type H3Prop ={
    children?:React.ReactNode;
    color?:string;
    otherProp?:string;
}& React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const H3 = ({children, color, ...otherProp}:H3Prop) => {
  return (
    <div className='text- text-2xl font-bold' style={{color:color}} {...otherProp}>{children}</div>
  )
}

export default H3
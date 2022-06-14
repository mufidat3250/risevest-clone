import React, { useState } from 'react'
import ArrowDown from '../Vectors/ArrowDown';
type tab = {
    activeTab?:boolean;
    setActive?:(value:string)=>void
    currentPath:string
    tabs:any
}& React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>



const NavTab = ({activeTab, tabs, currentPath, setActive=()=>{}}:tab) => {
  return (
    <div className='flex cursor-pointer space-x-[2.5rem] text-primary'>
         <span
          onClick={()=>setActive(currentPath)}
      className={`${
        '' ? "active":''
      } flex cursor-pointer gap-x-[4px] items-center`}
    >
      {tabs.title} {tabs.url.includes('products') && <ArrowDown/>}
    </span> 
    </div>
  )
}

export default NavTab
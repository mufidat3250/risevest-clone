import React, { ReactNode } from 'react'
import './Button.scss'
type buttonProp = {
    prefixIcon?:ReactNode;
    sufixIcon?:ReactNode;
    title?:string;
    subtitle?:string;
    customClass?:string;
    href?: string;
}&  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Button = ({prefixIcon, sufixIcon,href,  title,customClass, subtitle}:buttonProp) => {

    let buttonClass = ['Button']
    if(customClass){
        buttonClass.push(customClass)
    }

  return (
    <a className={`${buttonClass.join(' ')}`} href={href}> 
        <span>{prefixIcon}</span>
        {subtitle ? <div className=''> <p className='text-xs text-white'>{title}</p>
        <p className='font-bold text-white text-sm'>{subtitle}</p></div> : <div className=''>{title}</div>}
        
    </a>
  )
}

export default Button
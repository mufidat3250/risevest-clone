import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import DropDownModal from '../atom/DropDownModal';
import Logo from '../atom/Vectors/Logo';
import './LandingPage.scss'
import {productData} from '../../src/data'


type props = {
    children:React.ReactNode;
    bgColor?:string;
}
const tabs = [
  {
    title:"Home",
    url:'/',
    id:1
  },
  {
    title: "Products",
    url:'/products',
    id:2
  },
 {
   title:'Invesment Club',
   url:'/investmentclub',
   id:3
 },
 
  {
    title:" About Us",
    url:'/about-us',
    id:4
  },
 {
   title:'FAQs',
   url:'/faqs',
   id:5
 },
 {
   title:'Blog',
   url:'/blog',
   id:6
 },
];
const Landingpage = ({children, bgColor}:props) => {
  const [currentpath] =useState(window.location.pathname);
  const [activeTab, setActiveTab] = useState<'top'|'bottom'>('top');
  const [Active, setActive] = useState('')
  let isActive:boolean
  console.log(currentpath)
  const navigate = useNavigate()
  const [product, setProduct] = useState(false)
  
  console.log(Active)
  console.log({navigate})

  const handleTabClick = (title: string, url: string) => {
      setActiveTab('top')
     if( title === 'Products'){
      setProduct(true)
     }else {
      navigate(url) 
     }
      setTimeout(()=>{
        setActiveTab('bottom')
      }, 1000)             
  }
  return (
    <div className='flex flex-col h-screen overflow-y-auto'  >
   <div className='' style={{backgroundColor:bgColor}}>
   <div className=" home-container lg:w-[80%] mx-auto">
    <div className=' flex justify-between py-4 mx-8'>
    <div onClick={()=>  navigate('/home')} className="flex gap-[5px]  relative rise-container">
     <Logo /> 
     <span onClick={()=>{
       setActiveTab('top')
     
     }} className={`circle cursor-pointer ${ activeTab=='bottom'?'rise':activeTab=='top'?'fall':''}`}></span>         
     </div>
   <div className=' navtab flex space-x-[2rem] relative'>
   {tabs.map(({title, url, id}, index)=>{    
        isActive = currentpath===url
        
      return <p className={` text-primary cursor-pointer font-[700]${ activeTab && isActive ? 'active-tab relative after:absolute after:h-[10px] after:w-[10px] after:bg-[#0898a0] after:rounded-full after:bottom-[-10px] after:left-[40%]':''}`} key={index} onClick={()=> handleTabClick(title, url)}>
        {title} 
      </p>
    })}
    <div className='absolute bottom-[-12.5rem] left-[-1rem]'>
    <DropDownModal 
      showModal={product}
      closeModal={setProduct}
    >
    
    <div className='space-y-[1rem]'>
    {productData.map(({title, link}, index)=>{
    let  ActiveProduct:boolean;

      ActiveProduct= currentpath===link
      return <a 
       onClick={()=>{
        setActive(title)
        if(link === 'product') {
          navigate(`/${link}`)
          return
        }
        navigate(`/product/${link}`)
        
      }} className={`flex justify-between text-[16px] items-center cursor-pointer text-[#55b4b7] font-bold`} key={index}><span >{title}</span><span className={Active==title?'h-[10px] w-[10px] rounded-full bg-[#2f98a0]':''}></span></a>
    })}
    </div>
    
    </DropDownModal>
    </div>
    </div> 
    </div>
     </div>
   </div>
   <main className='overflow-auto'>
       {children}
   </main>  
</div>
  )
}

export default Landingpage



 
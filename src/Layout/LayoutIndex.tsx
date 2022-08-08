import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import DropDownModal from '../atom/DropDownModal';
import Logo from '../atom/Vectors/Logo';
import './LandingPage.scss'
import {productData} from '../../src/data'
import HandBugger from '../atom/Vectors/HandBugger'
// import { Freshchat } from 'reactjs-freshchat';
import FreshChat from "react-freshchat";

// import 'reactjs-freshchat/dist/index.css'

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
    url:'',
    id:2
  },
 {
   title:'Invesment Club',
   url:'',
   id:3
 },
 
  {
    title:" About Us",
    url:'',
    id:4
  },
 {
   title:'FAQs',
   url:'',
   id:5
 },
 {
   title:'Blog',
   url:'',
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
  const [toggleNav, setToggleNav] = useState(false)
  
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
    <div className='flex flex-col h-screen overflow-y-auto overflow-x-hidden  relative'  >
   <div className='' style={{backgroundColor:bgColor}}>
   <div className=" w-[95%] md:w-[95%] lg:w-[80%] mx-auto">
    <div className='relative flex justify-between py-4 lg:mx-4'>
    <div onClick={()=>  navigate('/home')} className="flex gap-[5px] relative rise-container">
     <Logo /> 
     <span onClick={()=>{
       setActiveTab('top')
     
     }} className={`circle cursor-pointer ${ activeTab=='bottom'?'rise':activeTab=='top'?'fall':''}`}></span>         
     </div>
     <HandBugger className={` md:hidden `} onClick={()=>{
       setToggleNav(!toggleNav)
     }}/>
     <div className={` md:block ${toggleNav ?'block inherit p-0 m-0 w-full  h-screen top-0 left-0':'navtab hidden'}`}>      
     <div className={`${toggleNav ? 'w-screen absolute top-0 -left-0 bg-white text-left  h-screen flex flex-col overflow-hidden max-w-[100%] mx-auto':'flex md:flex-row space-x-[2rem] md:relative'}`}>
    
   {/* <div className='flex  justify-end mb-[30px] '>
   <img src="/Vectors/close-line.svg" alt="" className='block h-8 w-8 md:hidden cursor-pointer  justify-end mt-3 ' onClick={()=>setToggleNav(false)} />
   </div> */}
     <div className='md:flex md:space-x-3 space-y-5 md:space-y-0 '>
     {tabs.map(({title, url, id}, index)=>{    
        isActive = currentpath===url        
      return <p className={`text-primary cursor-pointer font-[700]${ activeTab && isActive ? 'md:active-tab relative after:absolute after:h-[10px] after:w-[10px] md:after:bg-[#0898a0] after:rounded-full after:bottom-[-10px] after:left-[40%]':''}`} key={index} onClick={()=> handleTabClick(title, url)}>
        {title} 
      </p>
    })}
     </div>
    {/* </div> */}
     
    
    <div className='absolute bottom-[-12.5rem] left-[-1rem]'>
    <DropDownModal 
      showModal={product}
      closeModal={setProduct}
    >    
    <div className=' dropdownModal space-y-[1rem]'>
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
   </div>
   
   <main className='overflow-auto'>
       {children}
   </main>  
   <div className='ro rounded-full'>
   <FreshChat
        token={"c9047c67-d145-4875-a9b1-26d5d54ab186"}
        host={"https://wchat.freshchat.com"}
        email="user@email.com"
        config={{
          headerProperty: {
            backgroundColor: "#16434d",
            foregroundColor: "#ffffff"
          }
        }}
        externalId={"john.doe1987"} // user’s id unique to your system
        first_name="..."
        onInit={(widget: { open: () => any; user: { get: () => any; }; on: (arg0: string, arg1: (resp: { status: any; data: any; }) => void) => any; }) => {
          console.log(888, widget.open());
          console.log(111, widget.user.get());
          console.log(
            333,
            widget.on("user:created", function (resp: { status: any; data: any; }) {
              console.log(11, resp);
              var status = resp && resp.status,
                data = resp && resp.data;
            })
          );
        }}
        onHide={(widget: any) => {
          console.log(11, widget);
        }}
      />
   </div>
</div>
  )
}

export default Landingpage


// {/* <div className={`${toggleNav ? 'w-screen absolute top-0 -left-0 bg-white text-left  h-screen flex flex-col overflow-hidden max-w-[100%] mx-auto':'flex md:flex-row space-x-[2rem] md:relative'}`}>
    
// {/* <div className=' bg-red-400 flex flex-col justify-between md:flex md:flex-row'> */}
// <div className='flex  justify-end mb-[30px] '>
// <img src="/Public/Vectors/close-line.svg" alt="" className='block h-8 w-8 md:hidden cursor-pointer  justify-end' onClick={()=>setToggleNav(false)} />
// </div>
//  <div className='md:flex md:space-x-3 space-y-5 md:space-y-0 '>
//  {tabs.map(({title, url, id}, index)=>{    
//     isActive = currentpath===url        
//   return <p className={`text-primary cursor-pointer font-[700]${ activeTab && isActive ? 'md:active-tab relative after:absolute after:h-[10px] after:w-[10px] md:after:bg-[#0898a0] after:rounded-full after:bottom-[-10px] after:left-[40%]':''}`} key={index} onClick={()=> handleTabClick(title, url)}>
//     {title} 
//   </p>
// })}
//  </div>
// {/* </div> */}
 

// <div className='absolute bottom-[-12.5rem] left-[-1rem]'>
// <DropDownModal 
//   showModal={product}
//   closeModal={setProduct}
// >    
// <div className=' dropdownModal space-y-[1rem]'>
// {productData.map(({title, link}, index)=>{
// let  ActiveProduct:boolean;
//   ActiveProduct= currentpath===link
//   return <a 
//    onClick={()=>{
//     setActive(title)
//     if(link === 'product') {
//       navigate(`/${link}`)
//       return
//     }
//     navigate(`/product/${link}`)
    
//   }} className={`flex justify-between text-[16px] items-center cursor-pointer text-[#55b4b7] font-bold`} key={index}><span >{title}</span><span className={Active==title?'h-[10px] w-[10px] rounded-full bg-[#2f98a0]':''}></span></a>
// })}
// </div>

// </DropDownModal>
// </div>
// </div>
//   */}
 
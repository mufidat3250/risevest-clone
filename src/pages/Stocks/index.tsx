import React from 'react'
import AssetIcon from '../../atom/AssetIcon'
import Button from '../../atom/Button'
import Dollarsign from '../../atom/Vectors/DollarSign'
import Rocket from '../../atom/Vectors/Rocket'
import SmileEmoji from '../../atom/Vectors/SmileEmoji'
import Trasparent from '../../atom/Vectors/Trasparent'
import Landingpage from '../../Layout/Index'
import Approach from '../../molecules/ApproachToRealEstate'
import ChooseRise from '../../molecules/chooseRise'
import Footer from '../../molecules/Footer'
import JoinInvestors from '../../molecules/JoinInvestors'
import ProductList from '../../molecules/ProductList/ProductList'
import './Stock.scss'


let gridData = [
  {
    icon:<Dollarsign/>,
    text:'We do the work for you and are fully committed to investing your money at the best available price.'
  },
  {
    icon:<Trasparent/>,
    text:'Our transparent and low fees gives room for beginners and experts in stocks to invest their money and maximize returns.'
  },
  {
    icon:<SmileEmoji/>,
    text:'We leverage market insights and ideas from our trusted advisors and fund managers.'
  },
  {
    icon:<Rocket/>,
    text:'You don’t have to worry too much about the market. We take on that burden for you.'
  }
]

const Stocks = () => {
  return (
    <Landingpage bgColor='#fef4f0'>
         <section className='bg-[#fef4f0] pt-[10rem]'>
     <div className=' flex flex-col justify-center items-center bg-white'>
    <AssetIcon img='/Public/Images/stocks.png'/> 
       <ProductList title='Stocks' disc='We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.' riskLevel='High' historyPercent='14'/>      
     </div>
     <Approach title={''}/>
    <div className='bg-white pt-[6rem]'>
    <div className='container bg-white'>
        <ChooseRise data={gridData} title='Why Choose Rise for Stocks Investment?'/>
     </div>  
      </div>   
      </section>







      <section className='container bg-white'>
        <JoinInvestors/>
      </section>
      <section className=' py-24 container flex flex-col justify-center items-center'>
        <h1 className='text-center text-[2.5rem]'>Our Equity Portfolio</h1>
        <div className='w-full flex justify-center items-center logos gap-[2rem] mt-[2.5rem]'>
          <img src="/Public/Images/facebook.png" alt="" />
          <img src="/Public/Images/apple.png" alt="" />
          <img src="/Public/Images/square.png" alt="" />
          <img src="/Public/Images/amazon.png" alt="" />
          <img src="/Public/Images/secure.png" alt="" />
          <img src="/Public/Images/adient.png" alt="" />
          <img src="/Public/Images/hattway.png" alt="" />
          <img src="/Public/Images/disnny.png" alt="" />
        </div>
      </section>
      <Footer/>
    </Landingpage>
  )
}

export default Stocks
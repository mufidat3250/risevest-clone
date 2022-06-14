import React from 'react'
import AssetIcon from '../../atom/AssetIcon'
import Cloud from '../../atom/Vectors/Cloud'
import Crown from '../../atom/Vectors/Crown'
import Globe from '../../atom/Vectors/Globe'
import Ideal from '../../atom/Vectors/Ideal'
import Landingpage from '../../Layout/Landingpage'
import Approach from '../../molecules/ApproachToRealEstate'
import ChooseRise from '../../molecules/chooseRise'
import Footer from '../../molecules/Footer'
import JoinInvestors from '../../molecules/JoinInvestors'
import ProductList from '../../molecules/ProductList/ProductList'
const gridData = [
  {
    icon:<Globe/>,
    text:'Investing in fixed income is like having a fixed deposit in another currency (USD)'
  },
  {
    icon:<Ideal/>,
    text:'It’s ideal for investors who want to protect their money at very minimum risk'
  },
  {
    icon:<Crown/>,
    text:'It’s great when protecting your money is a top priority.'
  },
  {
    icon:<Cloud/>,
    text:'It’s great when protecting your money is a top priority.'
  }
]

const FixedIncome = () => {
  return (
    <Landingpage bgColor='#ecfefe'>
      <section className='pt-[10rem] bg-[#ecfefe]'>
      <div className=' flex flex-col justify-center items-center bg-white'>
            <AssetIcon img='/Public/Images/income.png'/>
       <ProductList title='Fixed Income' disc='A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar.' riskLevel='Low' historyPercent='10'/>  
        </div>
        <Approach title='Our Approach to Fixed Income Investing'/>
        <div className='bg-white pt-[6rem]'>
    <div className='container bg-white'>
        <ChooseRise data={gridData} title='Why Choose Rise For Fixed Income Investment'/>
     </div>  
      </div> 
      </section>
      <section className='container'>
          <JoinInvestors/>
        </section>
        <Footer/>
    </Landingpage>
  )
}

export default FixedIncome
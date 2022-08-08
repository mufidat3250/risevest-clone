import React from 'react'
import AssetIcon from '../../atom/AssetIcon'
import DownLoad from '../../atom/Vectors/DownLoad'
import Home from '../../atom/Vectors/Home'
import People from '../../atom/Vectors/People'
import Landingpage from '../../Layout/Index'
import Approach from '../../molecules/ApproachToRealEstate'
import ChooseRise from '../../molecules/chooseRise'
import Footer from '../../molecules/Footer'
import JoinInvestors from '../../molecules/JoinInvestors'
import ProductList from '../../molecules/ProductList/ProductList'

const gridData = [
  {
    icon:<Home/>,
    text:'Our focus is investing in American properties with the best price to rent ratio and maximize your returns on investment.'
  },
  {
    icon:<People/>,
    text:'Our relationship with leading US service providers and being active in the market allows us to deliver a smooth investing process and increase your earnings.'
  },
  {
    icon:<DownLoad/>,
    text:'We manage all the paperwork and personnel issues to reduce the stress involved with property investments'
  }
]
const RealEstate = () => {
  return (
    <Landingpage bgColor='#f6f2fe'>
      <section className='pt-[10rem] bg-[#f6f2fe]'>
        <div className=' flex flex-col justify-center items-center bg-white'>
            <AssetIcon img='/Public/Images/estate.png'/>
       <ProductList title='Real Estate
' disc='We invest in our portfolio of rented buildings in the US and manage your money for returns through rent and capital appreciation.' riskLevel='Medium' historyPercent='14'/>
  
        </div>
        <Approach title='Our Approach to Real Estate Investing'/>
        <div className='bg-white pt-[6rem]'>
    <div className='container bg-white'>
        <ChooseRise data={gridData} title='Why Choose Rise For Real Estate Investment'/>
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

export default RealEstate
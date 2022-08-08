import React from 'react'
import Button from '../../atom/Button'
import LineChart from '../../atom/Chart/BarChart'
import Input from '../../atom/Input/Input'
import ArrowDown from '../../atom/Vectors/ArrowDown'
import Select from '../../atom/Vectors/Select/Select'
import Landingpage from '../../Layout/Index'
import Table from '../../molecules/Table/Table'

const BuildWealth = () => {
  return (
    <Landingpage>
      <section className='container'>
   <div className='pr-[3rem]'>
   <div className='mx-8 mt-12 grid grid-cols-2 gap-x-24' >
      <div>
        <h1 className='text-4xl font-bold text-primary  mb-2'> Save for retirement in dollars</h1>
        <p className='text text-lg text-[#534d48] mb-10'>
Answer a few questions and get a personalized investment plan that grows your portfolio until you can live comfortably from only the returns. Simply tell us:</p>
  <div className='flex items-center pb-20'><span className=' mr-4 text-primary'>Start building your future
</span> <ArrowDown/></div>
  <div className='space-y-[2rem]'> 
    <Input title='How old are you?' type='number' placeholder='35'/>
    <Input amount='$0.00' title='How much do you earn monthly?
    
'/>
<Input title='What % of your income do you want to invest monthly?' subtitle='We recommend 20% but feel free to start lower'/>
    <Input type="number" title='What age do you want to retire?' />
    <Select title='Which of these do you consider more important? Capital growth, Stability, or Safety?' options={['Capital Growth', 'Stability', 'Security']} />

<Button title='Calculate' customClass='!rounded-[4px] bg-primary text-white  hover:bg-[#52dae1] font-bold py-4 '/>    
  </div>
      </div>
      <div className='flex flex-col justify-end'>
        <h3 className='py-[1.5rem] font-[450] text-2xl mb-[1.5rem]'>Projection</h3>
        <p>Wealth Goal</p>
        <h1 className='font-[700] text-3xl'>$0.00</h1>
        <p className=' mb-7 text-lg'>In 30 Years</p>
        <div className='mt-[1rem] mb-8 flex space-x-[1.5rem]'>
        <div className='flex items-center'>
        <span className='flex items-center'>
            <span className='w-4 h-4 bg-[#bdbdbd] rounded-full'></span>
            <p>Saving</p>
          </span>
          <span className='flex items-center'>
            <span className='w-2 h-2 bg-[#645359] rounded-full'></span>
            <p>$0.00</p>
          </span>
        </div>
        <div className='flex'>
        <span className='flex items-center'>
            <span className='w-4 h-4 bg-primary rounded-full'></span>
            <p>Saving</p>
          </span>
          <span className='flex items-center'>
            <span className='w-2 h-2 bg-[#645359] rounded-full'></span>
            <p>$0.00</p>
          </span>
        </div>
        </div>

        <LineChart/>
        <div>
          <Table/>
        </div>
      </div>
      
       </div>
   </div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem incidunt illum sunt natus assumenda saepe, molestias mollitia obcaecati distinctio similique hic id, in, quasi non? Cumque beatae reprehenderit facere?
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta voluptas, mollitia magni excepturi voluptates vitae! Quasi delectus deserunt ratione excepturi? Aut, eum enim numquam molestias commodi dolores veritatis reiciendis.
      </section>
    </Landingpage>
  )
}

export default BuildWealth
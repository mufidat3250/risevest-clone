import React from 'react'
import {tableDate} from '../../data'
const Table = () => {
  return (
    <div className='h-[20rem] overflow-hidden w-full'>
        <table className=' overflow-hidden w-full '>
           <thead className='bg-[lightgray]'>
               <tr>
                   <td >year</td>
                   <td>Month</td>
                   <td>Month</td>
                   <td>Month</td>
                   <td>Month</td>
                   
               </tr>
           </thead>
           <tbody className=' overflow-y-auto w-full h-full'>  
        
        {Array(50)
.fill("")
.map((_, index) => (
<tr key={`${'j'}_table-row-${index}`} className='whitespace-nowrap w-full'>
  <td>2023</td>
  <td>$0.00</td>
  <td>$0.00</td>
  <td>$0.00</td>
  <td>$0.00</td>
</tr>
))}    
           </tbody>
        </table>
    </div>
  )
}

export default Table


{/* <thead className='bg-gray-200 w-full '>
<tr className='w-full'>

{tableDate.heading.map((item:any, index)=> (
             <th className=' pl-8 text-center'>
                {item.value}
            </th>
        ))}
</tr>

</thead>

<tbody className='overflow-auto w-full'>
{Array(50)
.fill("")
.map((_, index) => (
<tr key={`${'j'}_table-row-${index}`} className='whitespace-nowrap'>
  <td>2023</td>
  <td>$0.00</td>
  <td>$0.00</td>
  <td>$0.00</td>
  <td>$0.00</td>
</tr>
))}
</tbody> */}
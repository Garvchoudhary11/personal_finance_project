import React, { useContext, useEffect, useState } from 'react'
import { creditContext } from '../context/context'


const Financial_summary = () => {

  
  const value=useContext(creditContext)
  

  
  
    useEffect(() => {
      value.settotalexpense(Number(value.totalexpense)+Number(value.debit))
    }, [value.debit])
  
    useEffect(() => {
      value.settotalincome(Number(value.totalincome)+Number(value.credit))
    }, [value.credit])
  
   
  
  return (
    <div>
      
      <div className="container flex flex-col gap-3 items-center backdrop-blur-[1px] text-white text-3xl w-130 h-105 border-1 border-[rgb(73,73,73)] rounded-2xl shadow-[rgb(91,91,91)] shadow-xl/20 ">
        <div className=' text-3xl font-light my-8 mx-10 self-start'>Financial Summary</div>
        <div className='text-2xl w-[85%] h-20 bg-[rgb(53,53,53)] justify-self-center rounded-lg flex justify-between  items-center '>
          <div className='text-[rgb(91,91,91)] mx-3 h-8  '>Total Income</div>
          <div className='text-green-600 text-shadow-[2px_2px_5px]/50 text-shadow-grey mx-3 '>{value.totalincome}₹</div>
        </div>
        <div className='text-2xl w-[85%] h-20 bg-[rgb(53,53,53)] justify-self-center rounded-lg flex justify-between  items-center '>
          <div className='text-[rgb(91,91,91)] mx-3 h-8  '>Total Expense</div>
          <div className='text-red-600 text-shadow-[2px_2px_5px]/50 text-shadow-grey mx-3 '>{value.totalexpense}₹</div>
        </div>
        <div className='text-2xl w-[85%] h-20 bg-[rgb(53,53,53)] justify-self-center rounded-lg flex justify-between  items-center border-1 border-blue-500/50  inset-shadow-green-600 inset-shadow-sm/70'>
          <div className='text-[rgb(91,91,91)] mx-3 h-8 '>Remaining Balance</div>
          <div className='text-green-600 text-shadow-[2px_2px_5px]/50 text-shadow-grey mx-3 '>{value.totalincome-value.totalexpense}₹</div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Financial_summary

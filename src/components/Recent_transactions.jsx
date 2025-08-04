
import React from 'react'
import Expense_list from './expense_list'


const Recent_transactions = () => {

  return (
    <div>
      <div className='container flex justify-items-start items-center  backdrop-blur-[1px] text-white text-3xl  w-[100%]  border-1 border-[rgb(73,73,73)] rounded-2xl  shadow-[rgb(91,91,91)] shadow-xl/20 min-h-60 
      flex-col '>
        
        <div className='self-start my-8 mx-10'>
          Recent Transcations 
        </div>
        <div className='flex flex-col'>
          <Expense_list/>
          <Expense_list/>
          <Expense_list/>
          
        </div>
                  
        </div>
    </div>
  )
}

export default Recent_transactions

import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { creditContext } from '../context/context'

 



const Add_expense= () =>{

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const value=useContext(creditContext);
  const addexpense= (amount) =>{
    value.setDebit(amount);
    value.settotalexpense(Number(value.totalexpense)+Number(value.debit))
    value.settoggle('-ve')
  }

  const onSubmit = (data) => {
    addexpense(data.debit);
    value.setTitle(data.title);                        
  }

  
    
    return (
        <div>
                
            <div className='container flex flex-col items-start text-white text-3xl w-130 h-50 border-1 border-[rgb(73,73,73)] rounded-2xl shadow-[rgb(91,91,91)] shadow-xl/20 backdrop-blur-[1px]'>
                <div className=' text-3xl font-light my-8 mx-10'>
                    Add Expense
                </div>
                
                
                <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col ml-10' >
                    <input {...register("title")} type="text" className='w-60  bg-[rgb(53,53,53)]  border-1 rounded-lg border-[rgb(91,91,91)] text-xl text-[rgb(255,255,255)] hover:shadow-lg/50 hover:shadow-red-600 hover:text-red-600 focus:shadow-lg/50 focus:shadow-red-600 focus:text-red-600' placeholder=' Title'/>

                    <div>
                        <input {...register("debit")} type="number" className='mr-10 mt-2 w-60  bg-[rgb(53,53,53)]  border-1 rounded-lg border-[rgb(91,91,91)] text-xl text-[rgb(255,255,255)] hover:shadow-lg/50 hover:shadow-red-600 hover:text-red-600 focus:shadow-lg/50 focus:shadow-red-600 focus:text-red-600' placeholder=' ₹'  />
                        
                        <input type="submit" value="Add" className="text-black text-xl border-1 px-4 rounded-xl bg-[rgb(73,73,73)] border-[rgb(73,73,73)] active:shadow-lg/70 active:shadow-red-600 active:text-red-600 outline-1 outline-red-500/30 outline-offset-1 " />
                    </div>
                </form>
                
                 
                 
                
             </div>
        </div>
    )
}

export default Add_expense

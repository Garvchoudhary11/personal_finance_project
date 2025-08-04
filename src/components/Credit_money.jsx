import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { creditContext } from '../context/context'




const Credit_money= () =>{

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const value=useContext(creditContext)
  
  const addcredit=(amount) =>{
      value.setCredit(amount);
      value.settotalincome(Number(value.totalincome)+Number(value.credit));
      value.settoggle('+ve')
  }
    const onSubmit = (data) => {addcredit(data.credit);}
    
    return (
        <div>
                 
                 <div className='container flex-auto justify-items-start  backdrop-blur-[1px] text-white text-3xl w-130 h-50 border-1 border-[rgb(73,73,73)] rounded-2xl shadow-[rgb(91,91,91)] shadow-xl/20'>
                <div className=' text-3xl font-light my-8 mx-10'>Credit Money</div>
                <div className='text-[20px] font-light mx-10 mt-12'>Enter amount of Money</div>
                <form action="" onSubmit={handleSubmit(onSubmit)} >
                <input {...register("credit")} type="number" placeholder=' ₹' className='mx-10 mt-2 w-60  bg-[rgb(53,53,53)]  border-1 rounded-lg border-[rgb(91,91,91)] text-xl text-[rgb(255,255,255)] hover:shadow-lg/50 hover:shadow-green-600 hover:text-green-600 focus:shadow-lg/50 focus:shadow-green-600 focus:text-green-600' />
                <input type="submit" value="Add" className="text-black text-xl border-1 px-4 rounded-xl bg-[rgb(73,73,73)] border-[rgb(73,73,73)] active:shadow-lg/70 active:shadow-green-600 active:text-green-600 outline-1 outline-green-500/30 outline-offset-1 " />
                 </form>
                 
                 
                
            </div>
        </div>
    )
}

export default Credit_money

import React, { useState, useContext } from 'react'
import { creditContext } from '../context/context'
const Expense_list = () => {
    const [date, setdate] = useState(new Date)
    const value = useContext(creditContext)

    return (
        <div >
            <div className='w-[70vw] h-30 bg-[rgba(53,53,53,0.9)]  rounded-2xl flex justify-between mb-5'>
                <div className='left flex flex-col justify-between'>
                    <div className="disc flex mt-2 ml-4">
                        <div className="title text-2xl">
                            {value.toggle === '+ve' ? ('Credited') : (value.title)}
                        </div>
                        {/* <div className="category ml-2 text-lg px-3 py-1 bg-blue-800 rounded-3xl">
                        category
                    </div> */}
                    </div>
                    <div className="date self-start ml-4 mb-1 text-lg text-[rgb(91,91,91,91)]">
                        {date.toLocaleString().slice(0,)}


                    </div>
                </div>
                {value.toggle === '+ve' ? (<div className='right self-center mr-4  text-green-600 '>
                    {'+₹' + value.credit}
                </div>) :
                    (<div className='right self-center mr-4  text-red-600 '>
                        {'-₹' + value.debit}
                    </div>)}
            </div>
        </div>
    )
}

export default Expense_list

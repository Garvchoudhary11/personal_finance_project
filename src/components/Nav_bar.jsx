import React from 'react'

const Nav_bar = () => {
  return (
    <div>
        <div className='nav w-[90%] h-[10%] bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px] border-[0px_1px_1px_1px] border-[rgba(91,91,91,1)] rounded-[0px_0px_50px_50px] fixed z-1 justify-self-center flex justify-between items-center ' >
            <div className=' text-white  ml-10 font-medium text-3xl text-shadow-[4px_4px_4px] text-shadow-gray-500 '>
                Money Hub
            </div>
            <div className='right text-white mr-10 flex gap-3 text-xl'>
                <div className='px-3 py-1  hover:bg-white hover:text-black  rounded-2xl cursor-pointer'>
                    Home
                </div>
                <div className='px-3 py-1  hover:bg-white hover:text-black  rounded-2xl cursor-pointer'>
                    DashBoard
                </div>
                <div className='px-3 py-1  hover:bg-white hover:text-black  rounded-2xl cursor-pointer'>
                    AboutUs
                </div>
                <div className='px-3 py-1 hover:bg-[rgb(71,71,71)] hover:text-white  rounded-2xl cursor-pointer'>
                    Login
                </div>

            </div>



        </div>
    </div>
  )
}

export default Nav_bar

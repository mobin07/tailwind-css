import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='md:mt-4 p-8 mt-[320px]'>
        <div className='w-[70%]  mx-auto md:grid grid-cols-3 gap-6 '>
            <div className='col-span-1  flex flex-col items-center shadow-lg rounded-lg sm:mt-20 pb-4 hover:scale-105 duration-300'>
                <img src={single} alt="" className='h-16 w-16 mt-[-40px]'/>
                <p className='text-lg mt-2 font-bold'>Web Development</p>
                <p className='text-[28px]  font-bold mt-3'> $149</p>
                <p>Lorem ipsum dolor sit.</p>
                <p className='p-4 text-center'>Lorem ipsum dolor sit amet,  elit. Dolor, quis.</p>
                <p className='px-4 text-center'>Lorem ipsum dolor sit amet</p>
                <button className='bg-green-400 py-2 px-8 mt-4  rounded-lg '>Start Trail</button>
            </div>
            <div className='col-span-1 bg-gray-300  flex flex-col items-center shadow-lg rounded-lg sm:mt-20 pb-4 hover:scale-105 duration-300'>
                <img src={double} alt="" className='h-16 w-16 mt-[-40px]'/>
                <p className='text-lg mt-2 font-bold'>Web Development</p>
                <p className='text-[28px]  font-bold mt-3'> $149</p>
                <p>Lorem ipsum dolor sit.</p>
                <p className='p-4 text-center'>Lorem ipsum dolor sit amet,  elit. Dolor, quis.</p>
                <p className='px-4 text-center'>Lorem ipsum dolor sit amet</p>
                <button className='text-green-400  bg-black py-2 px-8 mt-4  rounded-lg '>Start Trail</button>
            </div>
            <div className='col-span-1  flex flex-col items-center shadow-lg rounded-lg sm:mt-20 pb-4 hover:scale-105 duration-300'>
                <img src={triple} alt="" className='h-16 w-16 mt-[-40px]'/>
                <p className='text-lg mt-2 font-bold'>Web Development</p>
                <p className='text-[28px]  font-bold mt-3'> $149</p>
                <p>Lorem ipsum dolor sit.</p>
                <p className='p-4 text-center'>Lorem ipsum dolor sit amet,  elit. Dolor, quis.</p>
                <p className='px-4 text-center'>Lorem ipsum dolor sit amet</p>
                <button className='bg-green-400 py-2 px-8 mt-4  rounded-lg '>Start Trail</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
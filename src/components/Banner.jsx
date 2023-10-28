import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
  return (
    <div className='w-full bg-[#3593ff] h-[400px] pt-[100px] sm:mt-[-16px]'>
        <div className='flex flex-col items-center my-auto justify-center '>
            <div className='text-xl mt-4'>Learn with us</div>
            <div className='text-white text-3xl mt-2'>Grow with us</div>
            <div className='text-2xl text-white mt-4'>Learn
            <Typed
            className='pl-2'
            strings={['Digital Makerting', 'Web Development', 'Ethical Hacking']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
                   
                
            </div>
            <button className='bg-black py-2 px-4 mt-4 text-white rounded-lg
'>Get Started</button>
        </div>
    </div>
  )
}

export default Banner
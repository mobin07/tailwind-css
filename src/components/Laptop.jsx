import React from 'react'
import laptop from '../assets/laptop.jpg'
const Laptop = () => {
  return (
    <div className='w-full '>
        <div className=' md:grid grid-cols-3 h-[300px] max-w-[70%] mx-auto my-16'>
            <div className='col-span-1 sm:w-[80%]'>
                <img src={laptop} alt="" />
            </div>
            <div className='col-span-2 '>
                <p className='text-green-300 text-lg font-bold mt-4 p-2'>LEARN FROM EXPERT</p>
                <p className='p-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
                </p>
                <button className='bg-black py-2 px-8 mt-4 text-white rounded-lg 
'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Laptop
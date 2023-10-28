import React from 'react'
import { AiFillFacebook ,AiOutlineInstagram,AiFillTwitterSquare,AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='w-full  bg-[#3593ff]  '>
        <div className='text-white w-[90%]   mx-auto md:flex justify-between p-8 py-12'>
            <div className=' md:w-[30%] '>
                <p className='text-xl text-black font-bold'>WsCube Tech</p>
                <p className='mt-2'>Lorem, ipsum dolor sit amet consectetur a Lorem, ipsum. Lorem, ipsum. accusamus maxime placeat?</p>
                <div className='flex justify-between mt-6 w-[70%] '>
                    <AiFillFacebook className='text-white h-6 w-6'/>
                    <AiOutlineInstagram className='text-white h-6 w-6'/>
                    <AiFillTwitterSquare className='text-white h-6 w-6'/>
                    <AiOutlineGithub className='text-white h-6 w-6'/>

                </div>
            </div>
            <div className='sm:flex flex-col justify-center md:w-[70%] md:grid grid-cols-3'>
                <div className=' col-span-1 mx-4'>
                    <p className='text-black font-bold text-xl'>Solutions</p>
                    <ul className='text-white'>
                        <li className='py-2'> Analytics </li>
                        <li className='py-2'> Marketing </li>
                        <li className='py-2'> Commerce </li>
                        <li className='py-2'> Insights </li>
                    </ul>
                </div>
                <div className=' col-span-1 mx-4'>
                    <p className='text-black font-bold text-xl'>Support</p>
                    <ul className='text-white'>
                        <li className='py-2'> Pricing </li>
                        <li className='py-2'> Documentation </li>
                        <li className='py-2'> Guides </li>
                        <li className='py-2'> API status </li>
                    </ul>
                </div>
                <div className=' col-span-1 mx-4'>
                    <p className='text-black font-bold text-xl'>Company</p>
                    <ul className='text-white'>
                        <li className='py-2'> About </li>
                        <li className='py-2'> Blog </li>
                        <li className='py-2'> Jobs </li>
                        <li className='py-2'> Press </li>
                        <li className='py-2'> Careers </li>
                    </ul>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Footer
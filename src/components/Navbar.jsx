import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="bg-[#3593ff] m-0 p-0 w-full ">
    <div className="flex  justify-between items-center h-24 max-w-[96%] mx-auto px-4 text-black bg-black-400 bg-[#3593ff]">
      <div className="text-xl font-bold bg-[#3593ff]  text-gray-800">WsCube Tech</div>
      <div className="md:hidden ">
        {!toggle ? (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white h-6 w-6 "
          />
        ) : (
          <AiOutlineCloseSquare
            onClick={() => setToggle(!toggle)}
            className="text-white h-6 w-6"
          />
        )}
      </div>
      <ul className="hidden md:flex justify-between gap-4 text-white bg-[#3593ff] ">
        <li className="text-white ">Home </li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
 {
  toggle &&   <ul className={`bg-black md:hidden  ${toggle?'ml-[0%]':'ml[-100%]'} transition duration-150 ease-in-out`}>
  <li className="text-white m-4 p-4">Home </li>
  <li className="text-white m-4 p-4">Company</li>
  <li className="text-white m-4 p-4">Resources</li>
  <li className="text-white m-4 p-4">About</li>
  <li className="text-white m-4 p-4">Contact</li>
</ul>
 }
  

    </div>
  );
};

export default Navbar;

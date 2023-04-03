import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { IconContext } from "react-icons";
import {BiLogOut} from 'react-icons/bi'

const ActivityBar = () => {
  return (
    <div className='p-2 ml-4 w-full text-slate-800'>
      <div className='h-96 w-5/6 flex flex-col bg-amber-400 mr-[8rem] rounded'>
        <img src='../src/assets/cat.jpg' className='h-3/6 mt-3 w-5/6 ml-[1.3rem] rounded' />
        <div className='flex flex-row items-center mt-2 mb-3 ml-6 p-1'>
          <IconContext.Provider value={{ className: "global-class-name",size:"2rem"}}>
            <BiUserCircle />
          </IconContext.Provider>
          <span className='ml-2'>Profile</span>
        </div>
        <div className='flex flex-row items-center ml-6 p-1'>
          <IconContext.Provider value={{ className: "global-class-name",size:"2rem"}}>
            <BiLogOut />
          </IconContext.Provider>
          <span className='ml-2'>Log Out</span>
        </div>
      </div>
    </div>
  )
}

export default ActivityBar
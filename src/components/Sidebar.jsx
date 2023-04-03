import React from 'react'
import { MdRssFeed } from 'react-icons/md';
import {BsChatSquareTextFill} from 'react-icons/bs'
import {MdVideoLibrary} from 'react-icons/md'
import {BsBookmarksFill} from 'react-icons/bs'
import {IoMdSettings} from 'react-icons/io'

const Sidebar = () => {
  return (
        <div className='flex flex-col w-48 h-64 border p-2 bg-amber-400 shadow-md rounded-md text-slate-800 mt-4'>
            <a className='flex p-3 items-center rounded hover:bg-amber-600 '>
                <MdRssFeed/>
                <span className='ml-3 hover:cursor-pointer'>Feed</span> 
            </a>
            <a className='flex p-3 items-center rounded hover:bg-amber-600'>
                <BsChatSquareTextFill/>
               <span className='ml-3 hover:cursor-pointer'>Chat</span> 
            </a>
            <a className='flex p-3 items-center rounded hover:bg-amber-600'>
                <MdVideoLibrary/>
                <span className='ml-3 hover:cursor-pointer'>Videos</span>          
            </a>
            <a className='flex p-3 items-center rounded hover:bg-amber-600'>
                <BsBookmarksFill/>
                <span className='ml-3 hover:cursor-pointer'>Bookmarks</span>
            </a>
            <a className='flex p-3 items-center rounded hover:bg-amber-600'>
                <IoMdSettings/>
                <span className='ml-3 hover:cursor-pointer'>Settings</span>
            </a>
        </div>
  )
}

export default Sidebar
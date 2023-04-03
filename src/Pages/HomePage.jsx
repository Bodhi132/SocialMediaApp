import React from 'react'
import Sidebar from '../components/Sidebar'
import PostsWidget from '../components/PostsWidget'
import ActivityBar from '../components/ActivityBar'
import Posts from '../components/Posts'
import axios from 'axios'
import { useEffect,useContext } from 'react'
import { UserContext } from '../../UserContext'
import {Navigate,useParams} from 'react-router-dom'


const HomePage = () => {

  const {user} = useContext(UserContext)


  if(!user)
  {
    return <Navigate to={'/login'}/>
  }

  return (


    <div className='flex flex-row p-4'>
      <div className='basis-1/4'>
        <Sidebar />
      </div>
      <div className='flex flex-col basis-1/2 pr-[5%]'>
        <PostsWidget />
        <Posts/>
      </div>
      <div className='basis-1/4 '>
        <ActivityBar />
      </div>
    </div>
  )
}

export default HomePage
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../UserContext'
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";

const Posts = () => {

  const [userPosts, setUserPosts] = useState([])
  useEffect(() => {
    axios.get('/getUserPosts').then((response) => {
      setUserPosts(response.data);
    }).catch(() => {
      alert("Error")
    })
  }, [])

  console.log(userPosts);

  const { user } = useContext(UserContext);

    return (
      <div className='flex flex-col '>
        {/* <div className='w-full flex flex-col rounded shadow-md bg-amber-400 ml-4 mb-3'>
            <div className='flex flex-row'>
            <img src={`http://localhost:4000/${user?.photoUrl}`} className='h-10 w-10 rounded-full' />
            <span>{`${userPosts?.creator}`}</span>
            </div>
            <span className='ml-8 mt-5'>Hello World</span>
            <img src='..\src\assets\boat.jpg ' className='mt-[1rem] ml-6 h-[65%] w-[85%]'/>
          </div>
          <div className='w-full rounded shadow-md h-80 bg-amber-400 ml-4 mb-3'>
  
          </div>
          <div className='w-full rounded shadow-md h-80 bg-amber-400 ml-4 mb-3'>
  
          </div> */}
        {userPosts.length > 0 && userPosts.map(userPost => (
          < div key={uuidv4()}>
            <div className='w-full flex flex-col rounded shadow-md bg-amber-400 ml-4 mb-3'>
              <div className='flex flex-row p-1 pl-[3rem] pt-4 items-center'>
                <img src={`http://localhost:4000/userImages/${userPost?.creatorImage}`} className='h-10 w-10 rounded-full mr-2' />
                <span className='text-2xl mt-1 creator'>{`${userPost?.creator}`}</span>
              </div>
              <span className='ml-[3rem] mt-1 postText'>{`${userPost?.textPost}`}</span>
              <img src={`http://localhost:4000/userUploadImages/${userPost?.image}`}  className='mt-[0.5rem] ml-[3rem] h-[25rem] w-[85%] mb-3 rounded'/>
            </div>
          </div>
        ))}

      </div>
    )
  }


export default Posts
import React from 'react'
import { BsImages } from 'react-icons/bs'
import { useState,useContext } from 'react'
import { UserContext } from '../../UserContext'

import axios from 'axios'


const PostsWidget = () => {

  const [newPost, setNewPost] = useState(
    {
      image: '',
      textPost: ''
    }
  )


  const handleChange = (e) => {
    e.preventDefault()
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
    // console.log(e.target.name);
  }
  const handleImage = (e) => {
    e.preventDefault()
    setNewPost({ ...newPost, image: e.target.files[0] })
  }

  const {user} = useContext(UserContext);
  // console.log(user?.firstname);

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', newPost.image)
    formData.append('textPost', newPost.textPost)
    formData.append('creator', user.firstname)
    formData.append('creatorImage', user.photo)
    
    if(newPost.image || newPost.textPost)
    {
      axios.post('http://localhost:4000/userPost', formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    }
    // console.log(newPost.image.trim().length);

  }

  return (
    <div className='w-full ml-1 pl-2 '>
      <form onSubmit={handleSubmit} className='flex flex-col items-start pb-[2%] m-3  bg-amber-400 w-full rounded shadow-md'>
        <div className='flex p-3 w-full'>
          {/* {console.log(us)}; */}
          <img src={`http://localhost:4000/${user?.photoUrl}`} className='h-10 w-10 rounded-full' />
          <input
            type='text'
            placeholder="What's on your mind?"
            name='textPost'
            value={newPost.textPost}
            onChange={handleChange}
            className='ml-2 w-full px-2 rounded py-3'
          />
        </div>
        {/* <div className='px-4 ml-[3rem] w-5/6'>
          <img src='..\src\assets\boat.jpg' className='rounded w-full'/>
        </div> */}
        <hr className="w-5/6 h-[2px] ml-[4rem] mt-5 bg-black border-0 rounded dark:bg-gray-700" />
        <div className='flex flex-row items-center ml-2 pt-5 pb-4 w-full justify-between'>
          <label className='flex flex-row ml-[4rem] items-center p-1'>
            <input
              type='file'
              accept='.png, .jpg, .jpeg'
              name='image'
              onChange={handleImage}
              className='hidden'
            />
            <BsImages className='text-[1.5rem] text-amber-700' />
            <span className='ml-1 mt-2 text-xxl text-amber-900'>Upload</span>
          </label>
          <button type="submit" className='ml-3 mr-[7rem] hover:bg-amber-400 rounded bg-amber-700 border-black p-2 mt-1'>Share</button>
        </div>
      </form>
    </div>
  )
}

export default PostsWidget